import { fakeDatabase } from '@api/data'
import Cupcake, { links as cupcakeLinks } from '@app/components/client/cupcake'
import CalendarSvg from '@app/icons/calendar.svg'
import CardSvg from '@app/icons/card.svg'
import FillSvg from '@app/icons/fill.svg'
import StarSvg from '@app/icons/star.svg'
import styles from '@app/styles/index.scss?url'
import { snakeCase } from '@app/utils/string'
import { Prisma } from '@prisma/client'
import {
  type ActionFunctionArgs,
  LinksFunction,
  type LoaderFunctionArgs,
  json,
} from '@remix-run/node'
import {
  Form,
  Link,
  type MetaFunction,
  useFetcher,
  useLoaderData,
} from '@remix-run/react'
import { HTMLAttributes, useRef } from 'react'
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

export async function action({ request }: ActionFunctionArgs) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const formData = await request.formData()
  const firstName = String(formData.get('firstName'))
  const lastName = String(formData.get('lastName'))
  const email = String(formData.get('email'))
  const phone = String(formData.get('phone'))
  const message = String(formData.get('message'))
  const consent = Boolean(formData.get('consent'))

  const errors = []

  if (!firstName) {
    errors.push('Please enter your first name')
  }

  if (!lastName) {
    errors.push('Please enter your last name')
  }

  if (!email) {
    errors.push('Please enter your email address')
  }

  if (!message) {
    errors.push('Please enter a message')
  }

  if (message.length > 500) {
    errors.push('Message is too long')
  }

  if (!consent) {
    errors.push('Please consent to the terms')
  }

  if (errors.length) {
    return json({ errors }, { status: 400 })
  }

  await fakeDatabase.createMessage({
    firstName,
    lastName,
    email,
    phone,
    message,
  })

  return json({ success: true })
}

export async function loader({ request: _ }: LoaderFunctionArgs) {
  const menuCupcakes =
    (await fakeDatabase.getCupcakes()) as Prisma.CupcakeGetPayload<
      typeof payload
    >[]

  return json({ menuCupcakes })
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
  const { menuCupcakes } = useLoaderData<typeof loader>()
  const fetcher = useFetcher({ key: 'message-form' }) as {
    data: { success: boolean }
    state: string
  }
  const logoStarRef = useRef<HTMLElement | null>(null)
  const highlights = [
    { icon: CalendarSvg, text: t('index.contact.delivery') },
    { icon: FillSvg, text: t('index.contact.custom') },
    { icon: CardSvg, text: t('index.contact.payment') },
  ]
  const formFields = [
    {
      id: 'firstName',
      type: 'text',
      label: t('index.contact.form.firstName'),
      inputMode: 'text',
    },
    {
      id: 'lastName',
      type: 'text',
      label: t('index.contact.form.lastName'),
      inputMode: 'text',
    },
    {
      id: 'email',
      type: 'email',
      label: t('index.contact.form.email'),
      inputMode: 'email',
    },
    {
      id: 'phone',
      type: 'tel',
      label: t('index.contact.form.phone'),
      inputMode: 'numeric',
    },
    {
      id: 'message',
      type: 'textarea',
      label: t('index.contact.form.message'),
      inputMode: 'text',
    },
    { id: 'consent', type: 'checkbox', label: t('index.contact.form.consent') },
  ]

  const cupcakeMenu = menuCupcakes.map((cupcake) => {
    const cupcakeName =
      cupcake.flavor === 'CHOCOLATE' && cupcake.icingFlavor === 'CHOCOLATE'
        ? t(`menu.doubleChocolate`)
        : t(`menu.${cupcake.flavor.toString().toLowerCase()}`)

    return (
      <li
        key={`menu-cupcake-${snakeCase(cupcakeName)}`}
        className="index-menu-item"
      >
        <h3 aria-label={cupcakeName}>
          <span role="presentation">{cupcakeName}</span>
        </h3>
        <Cupcake {...cupcake} className="index-menu-cupcake" translate />
      </li>
    )
  })

  const contactForm = formFields.map((field, index) => {
    const { id, type, label, inputMode } = field

    if (!inputMode) {
      return (
        <div key={`contact-form-${index}`} className="index-contact-form-field">
          <label
            htmlFor={id}
            className="index-contact-form-field-checkbox-label"
          >
            <input
              id={id}
              name={id}
              type={type}
              className="index-contact-form-field-checkbox"
              required
            />
            <span>{label}</span>
          </label>
        </div>
      )
    }

    if (type === 'textarea') {
      return (
        <div key={`contact-form-${index}`} className="index-contact-form-field">
          <label htmlFor={id}>
            <textarea
              id={id}
              name={id}
              className="index-contact-form-field-textarea"
              required
              placeholder=" "
              maxLength={500}
            />
            <span className="index-contact-form-field-floating-label">
              {label}
            </span>
          </label>
        </div>
      )
    }

    return (
      <div key={`contact-form-${index}`} className="index-contact-form-field">
        <label htmlFor={id}>
          <input
            id={id}
            name={id}
            type={type}
            className="index-contact-form-field-text-input"
            inputMode={
              inputMode as HTMLAttributes<HTMLInputElement>['inputMode']
            }
            required={type === 'tel' ? undefined : true}
            placeholder=" "
          />
          <span className="index-contact-form-field-floating-label">
            {label}
          </span>
        </label>
      </div>
    )
  })

  const contactAside = highlights.map((highlight, index) => (
    <li
      key={`contact-highlight-${index}`}
      className="index-contact-highlights-item"
    >
      <highlight.icon role="presentation" />
      <span>{highlight.text}</span>
    </li>
  ))

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
          <span role="presentation">{t('brand')}</span>
        </Link>
        <StarSvg ref={logoStarRef} id="pageHeadingStar" role="presentation" />
      </h1>
      <header className="index-section" id="indexHero">
        <div className="index-hero-text">
          <p>{t('index.hero')}</p>
          <Link
            className="button"
            to="/#indexMenu"
            aria-label={t('index.hero.button')}
          >
            <span role="presentation">{t('index.hero.button')}</span>
          </Link>
        </div>
        <div className="index-hero-img" role="presentation">
          {menuCupcakes.slice(0, 2).map((cupcake, index) => (
            <Cupcake
              key={`hero-cupcake-${index}`}
              {...cupcake}
              className="index-hero-cupcake"
            />
          ))}
        </div>
      </header>
      <main>
        <section className="index-section" id="indexMenu">
          <h2 className="index-heading index-heading-small" id="menuHeading">
            {t('index.menu')}
          </h2>
          <div className="index-menu-content">
            <ul className="index-menu" aria-labelledby="menuHeading">
              {cupcakeMenu}
            </ul>
            <aside className="index-menu-kitchen">
              <p>{t('index.menu.aside')}</p>
              <Link
                className="button"
                to="#"
                aria-label={t('index.menu.button')}
              >
                <span role="presentation">{t('index.menu.aside.button')}</span>
              </Link>
            </aside>
          </div>
        </section>
        <section className="index-section" id="indexContact">
          <h2 className="index-heading index-heading-small" id="contactHeading">
            {t('index.contact')}
          </h2>
          <div className="index-contact-content">
            {!fetcher.data?.success ? (
              <Form
                method="post"
                className={`index-contact-form ${fetcher.state === 'idle' ? '' : 'index-contact-form-loading'}`}
                navigate={false}
                fetcherKey="message-form"
              >
                {contactForm}
                <button type="submit" className="button">
                  {t('index.contact.form.button')}
                </button>
              </Form>
            ) : (
              <div className="index-contact-form-success">
                <p>{t('index.contact.form.success')}</p>
              </div>
            )}
            <aside className="index-contact-text">
              <p className="index-contact-highlights-intro">
                {t('index.contact.text')}
              </p>
              <ul className="index-contact-highlights">{contactAside}</ul>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
