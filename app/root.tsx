import { Links, Meta, Outlet, Scripts, useLoaderData } from '@remix-run/react'
import { json, type LoaderFunctionArgs } from "@remix-run/node"

import { useChangeLanguage } from 'remix-i18next/react'
import { useTranslation } from 'react-i18next'
import i18next from '~/modules/i18next.server'

export async function loader({ request }: LoaderFunctionArgs) {
  let locale = await i18next.getLocale(request)
  return json({ locale })
}

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: 'common',
}

export default function App() {
  let { locale } = useLoaderData<typeof loader>()

  let { t, i18n } = useTranslation()

  useChangeLanguage(locale)

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>{t("brand")}</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  )
}
