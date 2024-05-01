import i18next from '@app/modules/i18next.server'
import Star from '@public/icons/star.svg'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import {
  Links,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  useLoaderData,
} from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { useChangeLanguage } from 'remix-i18next/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Cakes From Saturn' },
    {
      name: 'description',
      content: 'Customise and purchase cupcakes however you like!',
    },
  ]
}

export default function Index() {
  const { t } = useTranslation()

  return (
    <div className="screen">
      <div className="background" aria-hidden="true">
        <span className='stars' />
      </div>
      <h1 id="pageHeading" aria-label={t('brand')}>
        <span aria-hidden="true">{t('brand')}</span>
        <Star id="pageHeadingStar" aria-hidden="true" />
      </h1>
    </div>
  )
}
