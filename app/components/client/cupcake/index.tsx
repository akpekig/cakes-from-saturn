import Case, { links as caseLinks } from '@app/components/client/case'
import Icing, { links as icingLinks } from '@app/components/client/icing'
import Toppings, {
  links as toppingsLinks,
} from '@app/components/client/toppings'
import { $Enums, Prisma } from '@prisma/client'
import type { LinksFunction } from '@remix-run/node'
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
  const cakeColor =
    props.color === $Enums.Color.MATCH_FLAVOR ? props.flavor : props.color
  const cakeColorClassName = `cake cake-${cakeColor.toLowerCase()}`
  const icingProps = {
    icingColor: props.icingColor,
    icingFlavor: props.icingFlavor,
    icingTexture: props.icingTexture,
  }
  const toppingsProps = {
    toppings: props.toppings.map((topping) => ({ ...topping, cupcake: props })),
    className: props.toppingsClassName,
  }

  return (
    <>
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
          className={cakeColorClassName}
          d="m100 381.5l0.3-0.1c0 0 84.5-48.9 259.9-48.9 175.4 0 260.4 49 260.4 49z"
        />
        <Icing {...icingProps} />
        {props.toppings && <Toppings {...toppingsProps} />}
        <Case caseColor={props.caseColor} />
      </svg>
      {props.translate && (
        <dl className="visually-hidden" aria-label={t('cupcake.selection')}>
          <dt>{t('cupcake.cake')}</dt>
          <dd>
            {t(`cupcake.flavor.${props.flavor.toString().toLowerCase()}`)}
          </dd>
          <dt>{t('cupcake.cake.color')}</dt>
          <dt>{t(`cupcake.color.${props.color.toString().toLowerCase()}`)}</dt>
          <dt>{t('cupcake.icing')}</dt>
          <dd>
            {t(`cupcake.flavor.${props.icingFlavor.toString().toLowerCase()}`)}
          </dd>
          <dt>{t('cupcake.icing.color')}</dt>
          <dd>
            {t(`cupcake.color.${props.icingColor.toString().toLowerCase()}`)}
          </dd>
          <dt>{t('cupcake.icing.texture')}</dt>
          <dd>
            {t(
              `cupcake.icing.texture.${props.icingTexture.toString().toLowerCase()}`,
            )}
          </dd>
          <dt>{t('cupcake.topping')}</dt>
          {!!props.toppings &&
            props.toppings.map((topping, index) => (
              <div key={`cupcake-${props.id}-topping-${topping.id}-${index}`}>
                <dd>
                  {t(
                    `cupcake.topping.${topping.type.toString().toLowerCase()}`,
                  )}
                </dd>
                {topping.amount && (
                  <dd>
                    {t(
                      `cupcake.topping.${topping.amount.toString().toLowerCase()}`,
                    )}
                  </dd>
                )}
                {topping.color && (
                  <dd>
                    {t(
                      `cupcake.color.${topping.color.toString().toLowerCase()}`,
                    )}
                  </dd>
                )}
              </div>
            ))}
        </dl>
      )}
    </>
  )
}
