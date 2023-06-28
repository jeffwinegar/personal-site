import { useEffect, useRef, useState } from 'preact/hooks';

const usePersistedState = (name: string, defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const nameRef = useRef(name);

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(name);

      storedValue !== null
        ? setValue(storedValue)
        : localStorage.setItem(name, defaultValue);
    } catch {
      setValue(defaultValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(nameRef.current, value);
  }, [value]);

  useEffect(() => {
    const prevName = nameRef.current;

    if (name !== prevName) {
      localStorage.setItem(name, value);
      nameRef.current = name;
      localStorage.removeItem(prevName);
    }
  }, [name]);

  return [value, setValue] as const;
};

const useSystemColorScheme = () => {
  const mediaQueryList = !(typeof window === 'undefined')
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  const [systemColorScheme, setSystemColorScheme] = useState((): string =>
    mediaQueryList?.matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      setSystemColorScheme(event.matches ? 'dark' : 'light');
    };
    mediaQueryList?.addEventListener('change', listener);

    return () => mediaQueryList?.removeEventListener('change', listener);
  }, []);

  return systemColorScheme;
};

export const ThemeToggle = () => {
  const systemColorScheme = useSystemColorScheme();
  const [colorScheme, setColorScheme] = usePersistedState(
    'jw:setting:preferredColorScheme',
    'system'
  );

  useEffect(() => {
    const themePreference =
      colorScheme === 'system' ? systemColorScheme : colorScheme;
    document.documentElement.setAttribute('data-color-mode', themePreference);
  }, [colorScheme, systemColorScheme]);

  return (
    <fieldset>
      <legend>Select a color scheme preference</legend>
      <label>
        <input
          checked={colorScheme === 'light'}
          name="color-scheme"
          onChange={(e) => setColorScheme((e.target as HTMLInputElement).value)}
          type="radio"
          value="light"
        />
        <span>Light</span>
      </label>
      <label>
        <input
          checked={colorScheme === 'dark'}
          name="color-scheme"
          onChange={(e) => setColorScheme((e.target as HTMLInputElement).value)}
          type="radio"
          value="dark"
        />
        <span>Dark</span>
      </label>
      <label>
        <input
          checked={colorScheme === 'system'}
          name="color-scheme"
          onChange={(e) => setColorScheme((e.target as HTMLInputElement).value)}
          type="radio"
          value="system"
        />
        <span>System</span>
      </label>
    </fieldset>
  );
};
