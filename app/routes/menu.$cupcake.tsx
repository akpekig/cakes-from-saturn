import { fakeDatabase, IPitchData, type ICupcakeData, type IPitch } from '@api/data'
import Cupcake, { links as cupcakeLinks } from '@app/components/client/cupcake'
import Navigation, {
  links as navigationLinks,
} from '@app/components/navigation'
import CalendarSvg from '@app/icons/calendar.svg'
import CardSvg from '@app/icons/card.svg'
import FillSvg from '@app/icons/fill.svg'
import StarSvg from '@app/icons/star.svg'
import i18next from '@app/modules/i18next.server'
import indexStyles from '@app/styles/index.scss?url'
import styles from '@app/styles/menu-cupcake.scss?url'
import { snakeCase } from '@app/utils/string'
import { Prisma } from '@prisma/client'
import {
  type ActionFunctionArgs,
  type LinksFunction,
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
import { type HTMLAttributes, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export async function loader({ request, params }: LoaderFunctionArgs) {
    const languageNames = new Intl.DisplayNames(['en'], {
        type: 'language'
      })
    const locale = await i18next.getLocale(request)
    const t = await i18next.getFixedT(locale, 'common')
    const language = languageNames.of(locale)?.toUpperCase()
    const meta = [
      { title: t('brand') },
      { name: 'description', content: t('index.hero') },
    ]

    const cupcake = await fakeDatabase.getCupcakeBySlug(params.cupcake ?? '')
  
    if (!cupcake) throw new Response("", { status: 404 })

    const pitch = cupcake.pitch.filter((pitch) => pitch.language === language)

    meta[0].title = `${pitch.find((copy) => copy.title === "name")?.text ?? ''} | ${t('brand')}` 

    return json({ meta, cupcake, pitch })
}

export const links: LinksFunction = () => [
  ...navigationLinks(),
  ...cupcakeLinks(),
  { 
    rel: 'stylesheet',
    href: indexStyles,
    as: 'style',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: styles,
    as: 'style',
    crossOrigin: 'anonymous'
  },
]

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (data && 'error' in data) {
    return [{ name: 'robots', content: 'noindex' }]
  }

  return data?.meta
}

export default function MenuCupcake() {
  const { t } = useTranslation()
  const { cupcake, pitch }: {
    cupcake: ICupcakeData
    pitch: IPitchData[]
  } = useLoaderData() ?? {}
  const name = pitch.find((copy) => copy.title === "name")?.text ?? ''
  const description = pitch.find((copy) => copy.title === "description")?.text ?? ''
  const ingredients = pitch.find((copy) => copy.title === "ingredients")?.text ?? ''
  // const fetcher = useFetcher({ key: 'message-form' }) as {
  //   data: { success: boolean }
  //   state: string
  // }
  // const logoStarRef = useRef<HTMLElement | null>(null)
  // const highlights = [
  //   { icon: CalendarSvg, text: t('index.contact.delivery') },
  //   { icon: FillSvg, text: t('index.contact.custom') },
  //   { icon: CardSvg, text: t('index.contact.payment') },
  // ]
  // const formFields = [
  //   {
  //     id: 'firstName',
  //     type: 'text',
  //     label: t('index.contact.form.firstName'),
  //     inputMode: 'text',
  //   },
  //   {
  //     id: 'lastName',
  //     type: 'text',
  //     label: t('index.contact.form.lastName'),
  //     inputMode: 'text',
  //   },
  //   {
  //     id: 'email',
  //     type: 'email',
  //     label: t('index.contact.form.email'),
  //     inputMode: 'email',
  //   },
  //   {
  //     id: 'phone',
  //     type: 'tel',
  //     label: t('index.contact.form.phone'),
  //     inputMode: 'numeric',
  //   },
  //   {
  //     id: 'message',
  //     type: 'textarea',
  //     label: t('index.contact.form.message'),
  //     inputMode: 'text',
  //   },
  //   { id: 'consent', type: 'checkbox', label: t('index.contact.form.consent') },
  // ]

  // const cupcakeMenu = menuCupcakes.map((cupcake) => {
  //   const cupcakeName =
  //     cupcake.flavor === 'CHOCOLATE' && cupcake.icingFlavor === 'CHOCOLATE'
  //       ? t(`menu.doubleChocolate`)
  //       : t(`menu.${cupcake.flavor.toString().toLowerCase()}`)

  //   return (
  //     <li
  //       key={`menu-cupcake-${snakeCase(cupcakeName)}`}
  //       className="index-menu-item"
  //     >
  //       <h3 aria-label={cupcakeName}>
  //         <span role="presentation">{cupcakeName}</span>
  //       </h3>
  //       <Cupcake {...cupcake} className="index-menu-cupcake" translate />
  //     </li>
  //   )
  // })

  // const contactForm = formFields.map((field, index) => {
  //   const { id, type, label, inputMode } = field

  //   if (!inputMode) {
  //     return (
  //       <div key={`contact-form-${index}`} className="index-contact-form-field">
  //         <label
  //           htmlFor={id}
  //           className="index-contact-form-field-checkbox-label"
  //         >
  //           <input
  //             id={id}
  //             name={id}
  //             type={type}
  //             className="index-contact-form-field-checkbox"
  //             required
  //           />
  //           <span>{label}</span>
  //         </label>
  //       </div>
  //     )
  //   }

  //   if (type === 'textarea') {
  //     return (
  //       <div key={`contact-form-${index}`} className="index-contact-form-field">
  //         <label htmlFor={id}>
  //           <textarea
  //             id={id}
  //             name={id}
  //             className="index-contact-form-field-textarea"
  //             required
  //             placeholder=" "
  //             maxLength={500}
  //           />
  //           <span className="index-contact-form-field-floating-label">
  //             {label}
  //           </span>
  //         </label>
  //       </div>
  //     )
  //   }

  //   return (
  //     <div key={`contact-form-${index}`} className="index-contact-form-field">
  //       <label htmlFor={id}>
  //         <input
  //           id={id}
  //           name={id}
  //           type={type}
  //           className="index-contact-form-field-text-input"
  //           inputMode={
  //             inputMode as HTMLAttributes<HTMLInputElement>['inputMode']
  //           }
  //           required={type === 'tel' ? undefined : true}
  //           placeholder=" "
  //         />
  //         <span className="index-contact-form-field-floating-label">
  //           {label}
  //         </span>
  //       </label>
  //     </div>
  //   )
  // })

  // const contactAside = highlights.map((highlight, index) => (
  //   <li
  //     key={`contact-highlight-${index}`}
  //     className="index-contact-highlights-item"
  //   >
  //     <highlight.icon role="presentation" />
  //     <span>{highlight.text}</span>
  //   </li>
  // ))

  // const handleLogoInteraction = () => {
  //   if (logoStarRef.current) {
  //     const newLogoStar = logoStarRef.current.cloneNode(true) as HTMLElement
  //     logoStarRef.current.replaceWith(newLogoStar)
  //     logoStarRef.current = newLogoStar
  //   }
  // }

  return (
    <div className="page">
      <h1 className='visually-hidden'>{t('brand')}</h1>
      <Navigation position="top" />
      <main className='menu-cupcake-content'>
        <div className='menu-cupcake-header'>
          {name && (<h2 className="menu-cupcake-heading">
            {name}
          </h2>)}
          {description && (<p className="menu-cupcake-description">
            {description}
          </p>)}
          {cupcake.price && (<p className="menu-cupcake-price">£{cupcake.price}</p>)}
        </div>
        <section className='menu-cupcake-details' aria-label={t('menu.details')}>
          <details>
            <summary className='menu-cupcake-detail-summary'>{t('menu.ingredients')}</summary>
            <p>{ingredients}</p>
          </details>
          <details>
            <summary className='menu-cupcake-detail-summary'>{t('menu.more')}</summary>
            <p></p>
          </details>
        </section>
        <section className='menu-cupcake-display' role='presentation'>
          <div className='menu-cupcake-display-item-preview'>
            <Cupcake {...cupcake} className='menu-cupcake-display-item-graphic' />
          </div>
        </section>
        <form className='menu-cupcake-form'>
          <input type='hidden' name='cupcake' value={cupcake.slug ?? ''} />
          <label htmlFor='quantity' className='visually-hidden'>{t('menu.quantity')}</label>
          <input type='number' name='quantity' id='quantity' required />
          <button type='submit'>{t('menu.add')}</button>
        </form>
      </main>
      <Navigation position="bottom" />
    </div>
  )
}
