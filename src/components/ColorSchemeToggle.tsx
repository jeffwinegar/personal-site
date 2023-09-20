import { useEffect, useRef, useState } from 'preact/hooks';
import type { JSX } from 'preact/jsx-runtime';
import styles from './ColorSchemeToggle.module.css';

type ChangeEvent = JSX.TargetedEvent<HTMLInputElement, Event>;

const usePersistedState = (name: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    const val = localStorage.getItem(name);

    return val !== null ? val : defaultValue;
  });
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

  const [systemColorScheme, setSystemColorScheme] = useState(() =>
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

export const ColorSchemeToggle = () => {
  const systemColorScheme = useSystemColorScheme();
  const [colorScheme, setColorScheme] = usePersistedState(
    'jw:setting:preferredColorScheme',
    'system'
  );

  useEffect(() => {
    const themePreference =
      colorScheme === 'system' ? systemColorScheme : colorScheme;
    document.documentElement.setAttribute('data-color-scheme', themePreference);
  }, [colorScheme, systemColorScheme]);

  return (
    <fieldset className={styles['color-scheme-toggle']}>
      <legend>Select a color scheme preference</legend>
      <label>
        <input
          checked={colorScheme === 'light'}
          name="color-scheme"
          onChange={(e: ChangeEvent) => setColorScheme(e.currentTarget.value)}
          type="radio"
          value="light"
        />
        <span className={styles['color-scheme-choice']}>Light</span>
      </label>
      <label>
        <input
          checked={colorScheme === 'dark'}
          name="color-scheme"
          onChange={(e: ChangeEvent) => setColorScheme(e.currentTarget.value)}
          type="radio"
          value="dark"
        />
        <span className={styles['color-scheme-choice']}>Dark</span>
      </label>
      <label>
        <input
          checked={colorScheme === 'system'}
          name="color-scheme"
          onChange={(e: ChangeEvent) => setColorScheme(e.currentTarget.value)}
          type="radio"
          value="system"
        />
        <span className={styles['color-scheme-choice']}>System</span>
      </label>
    </fieldset>
  );
};
