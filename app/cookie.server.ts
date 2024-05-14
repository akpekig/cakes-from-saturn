import { createCookie } from '@remix-run/node'

export const userLocale = createCookie('locale', {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  sameSite: 'lax',
  path: '/',
})
