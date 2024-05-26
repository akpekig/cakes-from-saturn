import i18n from '@app/config/i18n'
import i18next from '@app/modules/i18next.server'
import { RemixServer } from '@remix-run/react'
import { type EntryContext, handleRequest } from '@vercel/remix'
import { createInstance } from 'i18next'
import Backend from 'i18next-fs-backend'
import { resolve } from 'node:path'
import { I18nextProvider, initReactI18next } from 'react-i18next'

export default async function (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  let instance = createInstance()
  let lng = await i18next.getLocale(request)
  let ns = i18next.getRouteNamespaces(remixContext)

  await instance
    .use(initReactI18next) // Tell our instance to use react-i18next
    .use(Backend) // Setup our backend
    .init({
      ...i18n, // spread the configuration
      lng, // The locale we detected above
      ns, // The namespaces the routes about to render wants to use
      backend: {
        loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
      },
    })

  const remixI18nextServer = (
    <I18nextProvider i18n={instance}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nextProvider>
  )

  return handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixI18nextServer,
  )
}
