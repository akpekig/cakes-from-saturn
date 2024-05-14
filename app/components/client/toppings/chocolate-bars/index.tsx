import { type LinksFunction } from '@remix-run/node'

import styles from './styles.scss?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function ChocolateBars() {
  return (
    <g id="chocolate-bars">
      <g id="bar-left">
        <path
          id="base"
          className="bar"
          d="m171.6 141.3l116.5-36.5 21 78.5-70.2 25.1z"
        />
        <path
          id="plate-top-left"
          className="bar-highlight"
          d="m183.9 146.2l53.5-16.9 17.9 33.8-40.5 14.1z"
        />
        <path
          id="plate-top-right"
          className="bar-highlight"
          d="m284.5 113.6l-38.4 11.8 17.1 34.9 28.2-9.7z"
        />
        <path
          id="plate-bottom-left"
          className="bar-highlight"
          d="m220.4 179.3l38.4-12.3 13 24.9-29.1 10.3z"
        />
        <path
          id="plate-bottom-right"
          className="bar-highlight"
          d="m292.6 155.4l-27.5 8.6 12.3 25.9 23.1-8z"
        />
      </g>
      <path
        id="bar-right"
        className="bar"
        d="m453.7 88.6l111.1 51-42.5 46.8-63.8-3c0 0 7.6 1 10.3-16.6 2.9-18.1-12.8-23.8-12.8-23.8z"
      />
    </g>
  )
}
