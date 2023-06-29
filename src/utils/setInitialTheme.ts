const getInitialColorScheme = () => {
  const systemColorScheme = localStorage.getItem(
    'jw:setting:preferredColorScheme'
  );
  const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

  if (
    typeof systemColorScheme === 'string' &&
    systemColorScheme !== 'system'
  ) {
    return systemColorScheme;
  }

  if (
    typeof mediaQueryList.matches === 'boolean' ||
    systemColorScheme === 'system'
  ) {
    return mediaQueryList.matches ? 'dark' : 'light';
  }

  return 'light';
};

console.log({theme: getInitialColorScheme()});

document.documentElement.setAttribute(
  'data-color-mode',
  getInitialColorScheme()
);