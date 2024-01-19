import { createContext } from 'react';

export const ColorSchemeContext = createContext<{
  colorScheme: string;
  switchColorScheme: (nextScheme: string) => void;
}>({
  colorScheme: '',
  switchColorScheme: () => {},
});
