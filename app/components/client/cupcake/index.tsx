import Case, { links as caseLinks } from '@app/components/client/case'
import Icing, { links as icingLinks } from '@app/components/client/icing'
import Toppings, {
  links as toppingsLinks,
} from '@app/components/client/toppings'
import { $Enums, Prisma } from '@prisma/client'
import type { LinksFunction } from '@remix-run/node'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './styles.scss?url'

interface CupcakeProps
  extends Prisma.CupcakeGetPayload<{
    include: {
      flavor: true
      color: true
      icingTexture: true
      icingColor: true
      icingFlavor: true
      toppings: true
      caseColor: true
    }
  }> {
  className?: string
  toppingsClassName?: string
  translate?: boolean
}

export const links: LinksFunction = () => [
  ...icingLinks(),
  ...caseLinks(),
  ...toppingsLinks(),
  { rel: 'stylesheet', href: styles },
]

/**
 * A cupcake component that displays a cupcake with a customizable flavor, color, icing, toppings, and case color.
 * @param props Cupcake flavor, color, icing, toppings, and optional translate flag
 * @returns SVG element representing a cupcake
 */
export default function Cupcake(props: CupcakeProps) {
  const { t } = useTranslation('cupcake')
  const [displayCupcake, setDisplayCupcake] = useState<boolean>(false)
  const cakeColor =
    props.color === $Enums.Color.MATCH_FLAVOR ? props.flavor : props.color

  // Screen reader map for cake properties
  const srMap: TStringMap = props.translate ? {
    'cake': `flavor.${props.flavor}`,
    'cake.color': `color.${props.color}`,
    'icing': `flavor.${props.icingFlavor}`,
    'icing.color': `color.${props.icingColor}`,
    'icing.texture': `icing.texture.${props.icingTexture}`,
  } : {}

  // Screen reader map for topping properties
  const toppingSrMap: TStringMap = props.translate && !!props.toppings ? props.toppings.reduce((acc: {[key: string]: TStringMap}, { id, type, amount, color}) => {
    acc[`${id}`] = {}
    if (type) acc[`${id}`]["type"] = `topping.${type}`
    if (amount) acc[`${id}`]["amount"] = `topping.${amount}`
    if (color) acc[`${id}`]["color"] = `color.${color}`
    return acc
  }, {}) : {}

  useEffect(() => {
    setDisplayCupcake(true)

    return () => {
      setDisplayCupcake(false)
    }
  }, [])

  return (
    <>
      {displayCupcake && (
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="40 0 640 640"
          width="720"
          height="720"
          className={props.className}
          role={props.translate ? 'img' : 'presentation'}
        >
          {props.translate && (
            <title id={`cupcakeTitle-${props.id}`}>{t('cupcake')}</title>
          )}
          <linearGradient id="rainbowGradient">
            <stop offset="10%" />
            <stop offset="50%" />
            <stop offset="90%" />
          </linearGradient>
          <path
            className={`cake cake-${cakeColor.toLowerCase()}`}
            d="m100 381.5l0.3-0.1c0 0 84.5-48.9 259.9-48.9 175.4 0 260.4 49 260.4 49z"
          />
          <Icing {...props} />
          {props.toppings && <Toppings {...props} className={props.toppingsClassName} />}
          <Case {...props} />
        </svg>
      )}
      {props.translate && (
        <dl className="visually-hidden" aria-label={t('cupcake.selection')}>
          {Object.keys(srMap).map((key) => (
            <div key={`cupcake-${props.id}-${key.replace('\.', '-')}`}>
              <dt>{t(`cupcake.${key}`)}</dt>
              <dd>{t(`cupcake.${srMap[key].toLowerCase()}`)}</dd>
            </div>
          ))}
          {!!props.toppings &&
          (<div>
            <dt>{t('cupcake.topping')}</dt>
            {props.toppings.map((topping, index) => (
              <div key={`cupcake-${props.id}-${topping.id}-${index}`}>
                {Object.keys(toppingSrMap[topping.id]).map((key, innerIndex) => (
                  <dd key={`cupcake-${props.id}-${topping.id}-${index}-${innerIndex}-${key.replace('\.', '-')}`}>
                   {t(`cupcake.${toppingSrMap[topping.id][key].toLowerCase()}`)}
                  </dd>
                ))}
              </div>
            ))}
            </div>
            )}
        </dl>
      )}
    </>
  )
}
