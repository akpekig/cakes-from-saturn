import { $Enums } from '@prisma/client'
import { type LinksFunction } from '@remix-run/node'

import styles from './styles.scss?url'

interface CaseProps {
  caseColor: $Enums.CaseColor
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function Case({ caseColor = 'LIGHT' }: CaseProps) {
  return (
    <g id="case">
      <path
        className={`paper-${caseColor.toLowerCase()}`}
        d="m100 380.7h520.4l-84.8 229.5c0 17.5-350.8 17.5-350.8 0z"
      />
      <path
        className="paper-outline"
        d="m113 386.8h494.4l-80.5 218c0 16.7-333.3 16.7-333.3 0z"
      />
      <path
        className="paper-shadow"
        d="m113 386.8h494.4l-80.5 218c0 16.7-333.3 16.7-333.3 0z"
      />
      <path className="paper-folds" d="m358.8 386.6h1.4l0.2 230.4h-1.4z" />
      <path className="paper-folds" d="m271.1 386.7h1.4l0.2 228h-1.4z" />
      <path className="paper-folds" d="m198.1 388h1.5v220.7h-1.5z" />
      <path className="paper-folds" d="m446.5 386.6h1.4l0.2 228h-1.4z" />
      <path className="paper-folds" d="m519.7 388h1.4v220.7h-1.4z" />
    </g>
  )
}
