import { Prisma } from '@prisma/client'
import { type LinksFunction } from '@remix-run/node'
import { Suspense, lazy, useMemo } from 'react'

import { links as cherriesLinks } from './cherries'
import { links as chocolateBarsLinks } from './chocolate-bars'
import { links as chocolateChipsLinks } from './chocolate-chips'
import { links as chocolateFlakesLinks } from './chocolate-flakes'
import { links as heartsLinks } from './hearts'
import { links as sprinklesLinks } from './sprinkles'

interface ToppingsProps {
  toppings: Prisma.ToppingGetPayload<{
    include: {
      type: true
      color: true
      amount: true
      cupcake: true
    }
  }>[]
  className?: string
}

const toppingMap = {
  CHERRY: lazy(() => import('./cherries')),
  SPRINKLES: lazy(() => import('./sprinkles')),
  CHOCOLATE_CHIPS: lazy(() => import('./chocolate-chips')),
  CHOCOLATE_BARS: lazy(() => import('./chocolate-bars')),
  CHOCOLATE_FLAKES: lazy(() => import('./chocolate-flakes')),
  HEARTS: lazy(() => import('./hearts')),
}

type ToppingKeys = keyof typeof toppingMap

const toppingsWithChocolate = [
  'CHOCOLATE_CHIPS',
  'CHOCOLATE_BARS',
  'CHOCOLATE_FLAKES',
]

const toppingsWithAmount = ['CHERRY']

const toppingsWithColor = ['HEARTS', 'SPRINKLES']

const toppingsOrder = [
  'HEARTS',
  'CHOCOLATE_BARS',
  'CHOCOLATE_FLAKES',
  'SPRINKLES',
  'CHOCOLATE_CHIPS',
  'CHERRY',
]

export const links: LinksFunction = () => [
  ...heartsLinks(),
  ...chocolateBarsLinks(),
  ...chocolateFlakesLinks(),
  ...sprinklesLinks(),
  ...chocolateChipsLinks(),
  ...cherriesLinks(),
]

export default function Toppings({ toppings, className }: ToppingsProps) {
  const sortedToppings = toppings.sort((a, b) => {
    return toppingsOrder.indexOf(a.type) - toppingsOrder.indexOf(b.type)
  })
  const toppingsComponents = useMemo(() => {
    return sortedToppings.map((topping, index) => {
      const type = topping.type as ToppingKeys
      const Component = toppingMap[type]

      if (toppingsWithAmount.includes(type)) {
        return (
          <Suspense key={index} fallback={null}>
            <Component amount={topping.amount ?? 'ONE'} />
          </Suspense>
        )
      }

      if (toppingsWithColor.includes(type)) {
        return (
          <Suspense key={index} fallback={null}>
            <Component color={topping.color ?? 'RAINBOW'} />
          </Suspense>
        )
      }

      if (toppingsWithChocolate.includes(type)) {
        return (
          <Suspense key={index} fallback={null}>
            <Component />
          </Suspense>
        )
      }
    })
  }, [])
  return (
    <g id="toppings" className={className}>
      {toppingsComponents}
    </g>
  )
}
