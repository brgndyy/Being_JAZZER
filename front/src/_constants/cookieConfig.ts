import deepFreeze from '@/_utils/deepFreeze';

const COOKIE_CONFIG = deepFreeze({
  access_token: {
    expires: new Date(Date.now() + 10 * 60 * 1000),
    secure: false,
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
  },
});

export default COOKIE_CONFIG;
