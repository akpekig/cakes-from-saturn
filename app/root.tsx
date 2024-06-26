import i18n from '@app/config/i18n'
import GasBlockSvg from '@app/icons/gas-block.svg'
import GasCenterSvg from '@app/icons/gas-center.svg'
import GlobeSvg from '@app/icons/globe.svg'
import i18next from '@app/modules/i18next.server'
import appStyles from '@app/styles/app.scss?url'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useChangeLanguage } from 'remix-i18next/react'

import { userLocale } from './cookie.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18next.getLocale(request)
  const supportedLanguages = i18n.supportedLngs
  return json(
    { locale, supportedLanguages },
    {
      headers: {
        'Set-Cookie': await userLocale.serialize(locale),
      },
    },
  )
}

export let handle = {
  i18n: ['common', 'cupcake'],
}

export function links() {
  return [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'stylesheet',
      href: appStyles,
      as: 'style',
      crossOrigin: 'anonymous',
    },
  ]
}

export default function App() {
  const { locale, supportedLanguages } = useLoaderData<typeof loader>()
  const { i18n, t } = useTranslation()
  const location = useLocation()
  const [backgroundDisplay, setBackgroundDisplay] = useState<boolean>(false)
  const languageSelectRef = useRef<HTMLDivElement | null>(null)
  const languageDisplay = new Intl.DisplayNames([locale], { type: 'language' })
  const languageSelectListClassName = 'language-select-list'
  const hiddenClassName = 'hidden'

  const handleOpenLanguageSelect = () => {
    if (!languageSelectRef.current) {
      return
    }

    const languageSelectList = languageSelectRef.current
    const isClosed = languageSelectList.classList.contains(hiddenClassName)

    if (isClosed) {
      languageSelectList.classList.replace(
        hiddenClassName,
        languageSelectListClassName,
      )
    } else {
      languageSelectList.classList.replace(
        languageSelectListClassName,
        hiddenClassName,
      )
    }
  }

  useEffect(() => {
    setBackgroundDisplay(true)

    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    return () => {
      setBackgroundDisplay(false)
    }
  }, [location])

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
        <div className="screen">
          {backgroundDisplay && (
            <div className="background" aria-hidden="true">
              <span className="stars" />
              <GasBlockSvg className="top" />
              <GasCenterSvg className="center" />
              <GasBlockSvg className="bottom" />
            </div>
          )}
          <Outlet />
          <div
            className="language-select"
            role="combobox"
            aria-expanded="false"
            aria-haspopup="listbox"
            aria-labelledby="languageSelectLabel"
            tabIndex={0}
          >
            <button id="languageSelectLabel" onClick={handleOpenLanguageSelect}>
              <span className="visually-hidden">{t('selectLanguage')}</span>
              <GlobeSvg className="language-select-icon" role="presentation" />
            </button>
            <div
              id="languageSelectList"
              ref={languageSelectRef}
              className={hiddenClassName}
              role="listbox"
              aria-labelledby="languageSelectLabel"
              tabIndex={-1}
            >
              {supportedLanguages.map((language, index) => (
                <Link
                  key={`lang-${index}`}
                  className={`language-select-option ${language === locale ? 'active' : ''}`}
                  to={`?lng=${language}`}
                  role="option"
                  aria-selected={language === locale}
                >
                  {languageDisplay.of(language)}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
