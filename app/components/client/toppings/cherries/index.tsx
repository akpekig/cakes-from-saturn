import { $Enums } from '@prisma/client'
import { type LinksFunction } from '@remix-run/node'

import styles from './styles.scss?url'

interface CherriesProps {
  amount?: $Enums.ToppingAmount
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function Cherries({
  amount = $Enums.ToppingAmount.ONE,
}: CherriesProps) {
  if (amount === $Enums.ToppingAmount.ONE) {
    return (
      <g id="cherry">
        <path
          className="cherry"
          d="m360 114c-16.6 0-30-8.7-30-19.5 0-10.8 13.4-19.5 30-19.5 16.6 0 30 8.7 30 19.5 0 10.8-13.4 19.5-30 19.5z"
        />
        <path
          className="cherry-highlight"
          d="m359 98c-7.2 0-13-4.2-13-9.5 0-5.3 5.8-9.5 13-9.5 7.2 0 13 4.2 13 9.5 0 5.3-5.8 9.5-13 9.5z"
        />
      </g>
    )
  }

  return (
    <g id="cherries">
      <g id="cherry-top">
        <path
          className="cherry"
          d="m360 114c-16.6 0-30-8.7-30-19.5 0-10.8 13.4-19.5 30-19.5 16.6 0 30 8.7 30 19.5 0 10.8-13.4 19.5-30 19.5z"
        />
        <path
          className="cherry-highlight"
          d="m359 98c-7.2 0-13-4.2-13-9.5 0-5.3 5.8-9.5 13-9.5 7.2 0 13 4.2 13 9.5 0 5.3-5.8 9.5-13 9.5z"
        />
      </g>
      <g id="cherry-middle-left">
        <path
          className="cherry"
          d="m239.4 213.9c-15.6 5.5-31.2 1.7-34.7-8.5-3.6-10.2 6.2-22.8 21.9-28.3 15.6-5.5 31.2-1.7 34.7 8.5 3.6 10.2-6.2 22.8-21.9 28.3z"
        />
        <path
          className="cherry-highlight"
          d="m243.2 196.1c-6.8 2.4-13.7 0.3-15.4-4.6-1.7-5 2.3-10.9 9.1-13.3 6.8-2.4 13.7-0.3 15.4 4.7 1.8 4.9-2.3 10.9-9.1 13.2z"
        />
      </g>
      <g id="cherry-middle-center">
        <path
          className="cherry"
          d="m383.4 249.9c-15.6 5.5-31.2 1.7-34.7-8.5-3.6-10.2 6.2-22.8 21.9-28.3 15.6-5.5 31.2-1.7 34.7 8.5 3.6 10.2-6.2 22.8-21.9 28.3z"
        />
        <path
          className="cherry-highlight"
          d="m391.2 237.1c-6.8 2.4-13.7 0.3-15.4-4.6-1.7-5 2.3-10.9 9.1-13.3 6.8-2.4 13.7-0.3 15.4 4.7 1.8 4.9-2.3 10.9-9.1 13.2z"
        />
      </g>
      <g id="cherry-middle-right">
        <path
          className="cherry"
          d="m515.4 242.9c-15.6 5.5-31.2 1.7-34.7-8.5-3.6-10.2 6.2-22.8 21.9-28.3 15.6-5.5 31.2-1.7 34.7 8.5 3.6 10.2-6.2 22.8-21.9 28.3z"
        />
        <path
          className="cherry-highlight"
          d="m523.2 227.1c-6.8 2.4-13.7 0.3-15.4-4.6-1.7-5 2.3-10.9 9.1-13.3 6.8-2.4 13.7-0.3 15.4 4.7 1.8 4.9-2.3 10.9-9.1 13.2z"
        />
      </g>
      <g id="cherry-bottom-left">
        <path
          className="cherry"
          d="m146.4 338.9c-15.6 5.5-31.2 1.7-34.7-8.5-3.6-10.2 6.2-22.8 21.9-28.3 15.6-5.5 31.2-1.7 34.7 8.5 3.6 10.2-6.2 22.8-21.9 28.3z"
        />
        <path
          className="cherry-highlight"
          d="m134.2 328.1c-6.8 2.4-13.7 0.3-15.4-4.6-1.7-5 2.3-10.9 9.1-13.3 6.8-2.4 13.7-0.3 15.4 4.7 1.8 4.9-2.3 10.9-9.1 13.2z"
        />
      </g>
      <g id="cherry-bottom-center-upper">
        <path
          className="cherry"
          d="m337.4 312.9c-15.6 5.5-31.2 1.7-34.7-8.5-3.6-10.2 6.2-22.8 21.9-28.3 15.6-5.5 31.2-1.7 34.7 8.5 3.6 10.2-6.2 22.8-21.9 28.3z"
        />
        <path
          className="cherry-highlight"
          d="m327.2 306.1c-6.8 2.4-13.7 0.3-15.4-4.6-1.7-5 2.3-10.9 9.1-13.3 6.8-2.4 13.7-0.3 15.4 4.7 1.8 4.9-2.3 10.9-9.1 13.2z"
        />
      </g>
      <g id="cherry-bottom-center-lower">
        <path
          className="cherry"
          d="m457.4 366.9c-15.6 5.5-31.2 1.7-34.7-8.5-3.6-10.2 6.2-22.8 21.9-28.3 15.6-5.5 31.2-1.7 34.7 8.5 3.6 10.2-6.2 22.8-21.9 28.3z"
        />
        <path
          className="cherry-highlight"
          d="m462.2 352.1c-6.8 2.4-13.7 0.3-15.4-4.6-1.7-5 2.3-10.9 9.1-13.3 6.8-2.4 13.7-0.3 15.4 4.7 1.8 4.9-2.3 10.9-9.1 13.2z"
        />
      </g>
      <g id="cherry-bottom-right">
        <path
          className="cherry"
          d="m594.4 307.9c-15.6 5.5-31.2 1.7-34.7-8.5-3.6-10.2 6.2-22.8 21.9-28.3 15.6-5.5 31.2-1.7 34.7 8.5 3.6 10.2-6.2 22.8-21.9 28.3z"
        />
        <path
          className="cherry-highlight"
          d="m600.2 292.1c-6.8 2.4-13.7 0.3-15.4-4.6-1.7-5 2.3-10.9 9.1-13.3 6.8-2.4 13.7-0.3 15.4 4.7 1.8 4.9-2.3 10.9-9.1 13.2z"
        />
      </g>
    </g>
  )
}
