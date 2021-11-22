export * from './auth/auth';
export * from './modal/modal';
export * from './news/news';
export * from './hero/hero';
export const resetApp = payload => ({
  type: 'RESET_APP',
  payload,
});
