import { $Enums } from '@prisma/client'
import { type LinksFunction } from '@remix-run/node'

import styles from './styles.scss?url'

interface SprinklesProps {
  color?: $Enums.Color
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function Sprinkles({
  color = $Enums.Color.RAINBOW,
}: SprinklesProps) {
  const sprinkleClassName = `sprinkle sprinkle-${color.toLowerCase()}`

  return (
    <g id="sprinkles">
      <path
        className={sprinkleClassName}
        d="m314.9 135.5c-1.5-2.3-0.9-5.4 1.4-6.9l19.9-13.5c2.2-1.5 5.4-0.9 6.9 1.4 1.5 2.3 0.9 5.4-1.4 6.9l-19.9 13.5c-2.2 1.5-5.4 0.9-6.9-1.4z"
      />
      <path
        className={sprinkleClassName}
        d="m372.6 151.6c0.7-2.7 3.5-4.3 6.1-3.6l23.2 6.3c2.7 0.7 4.2 3.5 3.5 6.1-0.7 2.7-3.5 4.3-6.1 3.6l-23.2-6.3c-2.7-0.7-4.2-3.5-3.5-6.1z"
      />
      <path
        className={sprinkleClassName}
        d="m251.9 195.9c-1.3-2.5-0.3-5.5 2.1-6.8l21.3-11.1c2.5-1.3 5.5-0.3 6.8 2.1 1.3 2.5 0.3 5.5-2.1 6.8l-21.3 11.1c-2.5 1.3-5.5 0.3-6.8-2.1z"
      />
      <path
        className={sprinkleClassName}
        d="m329 195c1.3-2.4 4.3-3.3 6.7-2l21.2 11.2c2.5 1.3 3.4 4.3 2.1 6.8-1.3 2.4-4.3 3.3-6.7 2l-21.2-11.2c-2.5-1.3-3.4-4.3-2.1-6.8z"
      />
      <path
        className={sprinkleClassName}
        d="m418 194.9c2.6 0.8 4.2 3.5 3.4 6.2l-6.4 23.1c-0.8 2.7-3.5 4.2-6.2 3.5-2.6-0.8-4.2-3.5-3.4-6.2l6.4-23.1c0.7-2.7 3.5-4.2 6.2-3.5z"
      />
      <path
        className={sprinkleClassName}
        d="m467.9 206.7c2.7-0.6 5.4 1.1 5.9 3.8l4.9 23.5c0.6 2.7-1.1 5.4-3.8 5.9-2.8 0.6-5.4-1.1-6-3.8l-4.8-23.5c-0.6-2.7 1.1-5.4 3.8-5.9z"
      />
      <path
        className={sprinkleClassName}
        d="m514.6 193.6c1.7 2.2 1.4 5.3-0.7 7l-18.7 15.1c-2.1 1.8-5.3 1.4-7-0.7-1.8-2.2-1.4-5.3 0.7-7l18.7-15.1c2.1-1.8 5.3-1.4 7 0.7z"
      />
      <path
        className={sprinkleClassName}
        d="m556 212.7c2.7 0.6 4.4 3.2 3.8 5.9l-5.1 23.5c-0.5 2.7-3.2 4.4-5.9 3.8-2.7-0.6-4.4-3.2-3.8-5.9l5-23.5c0.6-2.7 3.3-4.4 6-3.8z"
      />
      <path
        className={sprinkleClassName}
        d="m187.7 203c2.7-0.8 5.4 0.7 6.2 3.4l6.6 23.1c0.8 2.6-0.8 5.4-3.4 6.1-2.7 0.8-5.5-0.7-6.2-3.4l-6.6-23.1c-0.8-2.6 0.8-5.4 3.4-6.1z"
      />
      <path
        className={sprinkleClassName}
        d="m233.1 226c1.5-2.3 4.6-2.9 6.9-1.4l20.2 13c2.3 1.5 3 4.6 1.5 7-1.6 2.3-4.6 2.9-7 1.4l-20.1-13c-2.3-1.5-3-4.6-1.5-7z"
      />
      <path
        className={sprinkleClassName}
        d="m305.5 247.8c-1.3-2.5-0.4-5.5 2.1-6.8l21.1-11.4c2.5-1.3 5.5-0.3 6.8 2.1 1.3 2.4 0.4 5.4-2.1 6.8l-21.1 11.3c-2.4 1.3-5.5 0.4-6.8-2z"
      />
      <path
        className={sprinkleClassName}
        d="m384 235.2c2-1.9 5.2-1.7 7.1 0.3l16.2 17.7c1.9 2 1.7 5.2-0.3 7-2 1.9-5.2 1.8-7.1-0.3l-16.2-17.6c-1.9-2.1-1.7-5.2 0.3-7.1z"
      />
      <path
        className={sprinkleClassName}
        d="m194.7 301.6c-1.5-2.3-0.7-5.4 1.6-6.8l20.6-12.5c2.3-1.4 5.4-0.7 6.8 1.7 1.5 2.4 0.7 5.4-1.7 6.9l-20.5 12.4c-2.3 1.4-5.4 0.7-6.8-1.7z"
      />
      <path
        className={sprinkleClassName}
        d="m271.5 295.8c1.1-2.5 4.1-3.6 6.6-2.5l21.9 9.9c2.5 1.1 3.6 4.1 2.5 6.6-1.1 2.5-4.1 3.7-6.6 2.5l-21.9-9.8c-2.5-1.2-3.6-4.1-2.5-6.7z"
      />
      <path
        className={sprinkleClassName}
        d="m360.3 290c2.7 0.6 4.4 3.2 3.8 6l-4.9 23.4c-0.6 2.7-3.2 4.5-5.9 3.9-2.7-0.6-4.5-3.2-3.9-5.9l5-23.5c0.5-2.7 3.2-4.4 5.9-3.9z"
      />
      <path
        className={sprinkleClassName}
        d="m410.9 298.5c2.7-0.7 5.4 0.9 6.2 3.5l6.3 23.2c0.8 2.6-0.8 5.4-3.4 6.1-2.7 0.7-5.5-0.8-6.2-3.5l-6.4-23.1c-0.7-2.7 0.8-5.4 3.5-6.2z"
      />
      <path
        className={sprinkleClassName}
        d="m433.4 360.4c-0.1-2.8 2.1-5.1 4.8-5.2l24-0.7c2.8-0.1 5.1 2.1 5.2 4.8 0.1 2.8-2.1 5.1-4.9 5.2l-24 0.7c-2.7 0.1-5-2-5.1-4.8z"
      />
      <path
        className={sprinkleClassName}
        d="m456.7 282.5c1.8 2 1.7 5.2-0.3 7.1l-17.7 16.2c-2 1.9-5.2 1.8-7.1-0.3-1.8-2-1.7-5.1 0.3-7l17.7-16.3c2-1.9 5.2-1.7 7.1 0.3z"
      />
      <path
        className={sprinkleClassName}
        d="m499.2 298.9c2.7 0.4 4.6 2.9 4.2 5.7l-3.6 23.7c-0.4 2.7-2.9 4.6-5.7 4.2-2.7-0.4-4.6-2.9-4.2-5.7l3.6-23.7c0.4-2.7 2.9-4.6 5.7-4.2z"
      />
      <path
        className={sprinkleClassName}
        d="m594.1 358c-2.5-1.2-3.4-4.3-2.2-6.7l11-21.4c1.2-2.4 4.2-3.4 6.7-2.1 2.5 1.2 3.4 4.2 2.2 6.7l-11 21.4c-1.2 2.4-4.3 3.4-6.7 2.1z"
      />
      <path
        className={sprinkleClassName}
        d="m549.6 338.9c0-2.8 2.2-5 5-5l24-0.1c2.7 0 5 2.3 5 5 0 2.8-2.3 5-5 5l-24 0.1c-2.8 0-5-2.2-5-5z"
      />
      <path
        className={sprinkleClassName}
        d="m529.3 298.1c-1.7-2.2-1.4-5.3 0.8-7.1l18.6-15c2.2-1.8 5.3-1.4 7.1 0.7 1.7 2.2 1.4 5.3-0.8 7l-18.6 15.1c-2.2 1.8-5.3 1.4-7.1-0.7z"
      />
      <path
        className={sprinkleClassName}
        d="m131 312.8c2.6-0.9 5.5 0.5 6.4 3.1l8.1 22.6c0.9 2.6-0.4 5.4-3 6.3-2.6 1-5.5-0.4-6.4-3l-8.1-22.6c-0.9-2.6 0.4-5.4 3-6.4z"
      />
      <path
        className={sprinkleClassName}
        d="m177.8 333c1.4-2.5 4.4-3.3 6.8-2l21 11.8c2.4 1.3 3.2 4.4 1.9 6.8-1.4 2.4-4.4 3.3-6.8 1.9l-20.9-11.7c-2.5-1.4-3.3-4.4-2-6.8z"
      />
      <path
        className={sprinkleClassName}
        d="m251.5 350c-1.5-2.4-0.8-5.5 1.6-6.9l20.4-12.7c2.3-1.5 5.4-0.7 6.8 1.6 1.5 2.3 0.8 5.4-1.6 6.9l-20.3 12.7c-2.4 1.4-5.5 0.7-6.9-1.6z"
      />
      <path
        className={sprinkleClassName}
        d="m329 332.4c1.9-2 5.1-2.1 7.1-0.2l17.3 16.6c2 1.9 2.1 5.1 0.2 7.1-2 2-5.1 2.1-7.1 0.2l-17.4-16.6c-2-1.9-2-5.1-0.1-7.1z"
      />
    </g>
  )
}
