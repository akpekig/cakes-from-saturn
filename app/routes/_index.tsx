import { fakeDatabase } from '@api/data'
import Cupcake, { links as cupcakeLinks } from '@app/components/client/cupcake'
import StarSvg from '@app/icons/star.svg'
import styles from '@app/styles/index.scss?url'
import { snakeCase } from '@app/utils/string'
import { Prisma } from '@prisma/client'
import { LinksFunction, type LoaderFunctionArgs, json } from '@remix-run/node'
import { Link, type MetaFunction, useLoaderData } from '@remix-run/react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

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

  const menuCupcakes =
    (await fakeDatabase.getCupcakes()) as Prisma.CupcakeGetPayload<
      typeof payload
    >[]

  return json({ heroCupcakeLeft, heroCupcakeRight, menuCupcakes })
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
  const { heroCupcakeLeft, heroCupcakeRight, menuCupcakes } =
    useLoaderData<typeof loader>()
  const logoStarRef = useRef<HTMLElement | null>(null)

  const cupcakeMenu = menuCupcakes.map((cupcake, index) => {
    const cupcakeName =
      cupcake.flavor === 'CHOCOLATE' && cupcake.icingFlavor === 'CHOCOLATE'
        ? t(`menu.doubleChocolate`)
        : t(`menu.${cupcake.flavor.toString().toLowerCase()}`)

    return (
      <li
        key={`menu-cupcake-${snakeCase(cupcakeName)}`}
        className="index-menu-item"
      >
        <h3 aria-label={cupcakeName}>{cupcakeName}</h3>
        <Cupcake {...cupcake} className="index-menu-cupcake" translation />
      </li>
    )
  })

  const handleLogoInteraction = () => {
    if (logoStarRef.current) {
      const newLogoStar = logoStarRef.current.cloneNode(true) as HTMLElement
      logoStarRef.current.replaceWith(newLogoStar)
      logoStarRef.current = newLogoStar
    }
  }

  return (
    <div className="page">
      <dl></dl>
      <h1 id="pageHeading" className="index-heading" aria-label={t('brand')}>
        <Link
          id="pageHeadingLink"
          to="/"
          onMouseEnter={handleLogoInteraction}
          onFocus={handleLogoInteraction}
        >
          <span aria-hidden="true">{t('brand')}</span>
        </Link>
        <StarSvg ref={logoStarRef} id="pageHeadingStar" aria-hidden="true" />
      </h1>
      <header className="index-section" id="indexHero">
        <div className="index-hero-text">
          <p>{t('index.hero')}</p>
          <Link
            className="button"
            to="/#indexMenu"
            aria-label={t('index.hero.button')}
          >
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
          <ul className="index-menu" aria-labelledby="menuHeading">
            {cupcakeMenu}
          </ul>
        </section>
      </main>
    </div>
  )
}
