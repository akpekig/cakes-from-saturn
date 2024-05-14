import { fakeDatabase } from '@api/data'
import Cupcake, { links as cupcakeLinks } from '@app/components/client/cupcake'
import StarSvg from '@app/icons/star.svg'
import i18next from '@app/modules/i18next.server'
import styles from '@app/styles/index.scss?url'
import { $Enums, Prisma } from '@prisma/client'
import { LinksFunction, type LoaderFunctionArgs, json } from '@remix-run/node'
import {
  Link,
  Links,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  useLoaderData,
} from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { useChangeLanguage } from 'remix-i18next/react'

const payload = {
  include: {
    caseColor: true,
    color: true,
    icingTexture: true,
    icingFlavor: true,
    toppings: true,
  },
}

export async function loader({ request }: LoaderFunctionArgs) {
  const heroCupcakeLeft = (await fakeDatabase.getCupcakeById(
    '1',
  )) as Prisma.CupcakeGetPayload<typeof payload>
  const heroCupcakeRight = (await fakeDatabase.getCupcakeById(
    '2',
  )) as Prisma.CupcakeGetPayload<typeof payload>

  return json({ heroCupcakeLeft, heroCupcakeRight })
}

export const links: LinksFunction = () => [
  ...cupcakeLinks(),
  { rel: 'stylesheet', href: styles },
]

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
    <div className="page">
      <h1 id="pageHeading" className="index-heading" aria-label={t('brand')}>
        <span aria-hidden="true">{t('brand')}</span>
        <StarSvg id="pageHeadingStar" aria-hidden="true" />
      </h1>
      <header className="index-section" id="indexHero">
        <div className="index-hero-text">
          <p>{t('index.hero')}</p>
          <Link className="button" to="/#" aria-label={t('index.hero.button')}>
            {t('index.hero.button')}
          </Link>
        </div>
        <div className="index-hero-img" aria-hidden="true">
          <Cupcake {...heroCupcakeLeft} className="index-hero-cupcake-left" />
          <Cupcake {...heroCupcakeRight} className="index-hero-cupcake-right" />
        </div>
      </header>
      <main>
        <section className="index-section" id="indexMenu">
          <h2 className="index-heading" id="menuHeading">
            {t('index.menu')}
          </h2>
        </section>
      </main>
    </div>
  )
}
