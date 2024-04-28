import i18next from '@app/modules/i18next.server'
import appStyles from '@app/styles/app.scss?url'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, useLoaderData } from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { useChangeLanguage } from 'remix-i18next/react'

export async function loader({ request }: LoaderFunctionArgs) {
  let locale = await i18next.getLocale(request)
  return json({ locale })
}

export let handle = {
  i18n: 'common',
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: appStyles,
    },
  ]
}

export default function App() {
  let { locale } = useLoaderData<typeof loader>()

  let { t, i18n } = useTranslation()

  useChangeLanguage(locale)

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>{t('brand')}</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  )
}
