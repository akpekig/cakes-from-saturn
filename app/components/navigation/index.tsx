import CartSvg from '@app/icons/cart.svg'
import { LinksFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import LogoPng from './logo.png'
import styles from './styles.scss?url'

interface NavigationProps {
  position: 'top' | 'bottom'
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function Navigation({ position }: NavigationProps) {
  const { t } = useTranslation()
  const items = [
    { to: '/#menu', label: t('nav.catalog') },
    { to: '#', label: t('nav.custom') },
    { to: '/#contact', label: t('nav.contact') },
  ]

  if (position === 'top') {
    return (
      <nav
        className={`navigation navigation-${position}`}
        aria-label={t('nav.primary')}
      >
        <Link to="/" aria-label={t('brand')}>
          <img src={LogoPng} className="navigation-logo" role="presentation" />
        </Link>
        <ul className="navigation-list">
          {items.map((item, index) => (
            <li key={`nav-position-${index}`} className="navigation-list-item">
              <Link to={item.to} aria-label={item.label}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="#"
          className="navigation-cart-link"
          aria-label={t('nav.cart')}
        >
          <CartSvg className="navigation-cart" />
        </Link>
      </nav>
    )
  }

  return (
    <footer className="navigation-footer">
      <nav
        className={`navigation navigation-${position}`}
        aria-label={t('nav.footer')}
      >
        <ul className="navigation-list">
          {items.map((item, index) => (
            <li key={`nav-position-${index}`} className="navigation-list-item">
              <Link to={item.to} aria-label={item.label}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
