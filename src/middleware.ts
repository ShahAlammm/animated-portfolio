import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'bn'],

  // Used when no locale matches
  defaultLocale: ''
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!_next).*)'],
};