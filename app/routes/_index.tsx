import i18next from '@app/modules/i18next.server'
import StarSvg from '@app/icons/star.svg'
import { type LoaderFunctionArgs, json, LinksFunction } from '@remix-run/node'
import {
  Links,
  Link,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  useLoaderData,
} from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { useChangeLanguage } from 'remix-i18next/react'
import Cupcake, { links as cupcakeLinks } from '@app/components/client/cupcake'
import styles from '@app/styles/index.scss?url'
import { Prisma, $Enums } from '@prisma/client'

const payload = {
  "include": {
    "caseColor": true,
    "color": true,
    "icingTexture": true,
    "icingFlavor": true,
    "toppings": true,
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const heroCupcakeLeft: Prisma.CupcakeGetPayload<typeof payload> = {
    id: "1",
    caseColor: $Enums.CaseColor.LIGHT,
    color: $Enums.Color.MATCH_FLAVOR,
    flavor: $Enums.Flavor.VANILLA,
    icingColor: $Enums.Color.MATCH_FLAVOR,
    icingFlavor: $Enums.IcingFlavor.CHOCOLATE,
    icingTexture: $Enums.IcingTexture.SWIRL,
    toppings: [
      {
        id: "1",
        color: $Enums.Color.WHITE,
        type: $Enums.ToppingFlavor.HEARTS,
        price: null,
        amount: null,
        cupcakeId: null,
      }
    ],
    price: 1,
    orderId: null,
  }

  const heroCupcakeRight: Prisma.CupcakeGetPayload<typeof payload> = {
    ...heroCupcakeLeft,
    id: "2",
    icingFlavor: $Enums.IcingFlavor.VANILLA,
    toppings: [
      {
        id: "2",
        color: $Enums.Color.MATCH_FLAVOR,
        type: $Enums.ToppingFlavor.CHOCOLATE_CHIPS,
        price: null,
        amount: null,
        cupcakeId: null,
      },
      {
        id: "3",
        color: $Enums.Color.PINK,
        type: $Enums.ToppingFlavor.SPRINKLES,
        price: null,
        amount: null,
        cupcakeId: null,
      },
      {
        id: "4",
        color: $Enums.Color.MATCH_FLAVOR,
        type: $Enums.ToppingFlavor.CHOCOLATE_BARS,
        price: null,
        amount: null,
        cupcakeId: null,
      }
    ],
  }

  return json({ heroCupcakeLeft, heroCupcakeRight })
}

export const links: LinksFunction = () => [...cupcakeLinks(), { rel: 'stylesheet', href: styles }]

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
  const { heroCupcakeLeft, heroCupcakeRight } = useLoaderData<typeof loader>()

  return (
    <div className='page'>
      <h1 id="pageHeading" aria-label={t('brand')}>
        <span aria-hidden="true">{t('brand')}</span>
        <StarSvg id="pageHeadingStar" aria-hidden="true" />
      </h1>
      <div className='index-hero'>
        <div className='index-hero-text'>
          <p>{t('index.hero')}</p>
          <Link className='button' to="/#" aria-label={t('index.hero.button')}>{t('index.hero.button')}</Link>
        </div>
        <div className='index-hero-img' aria-hidden="true">
          <Cupcake {...heroCupcakeLeft} className='index-hero-cupcake-left'/>
          <Cupcake {...heroCupcakeRight} className='index-hero-cupcake-right' />
        </div>
      </div>
    </div>
  )
}
