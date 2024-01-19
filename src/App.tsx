import React from 'react';
import { Button, ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { theme } from './theme';
import { ThemeSwitcher } from './components/Layout';
import { ColorSchemeContext } from './contexts';

const App: React.FC = () => {
  const [currentColorScheme, setCurrentColorScheme] = React.useState('gray');

  return (
    <ColorSchemeContext.Provider
      value={React.useMemo(
        () => ({
          colorScheme: currentColorScheme,
          switchColorScheme: setCurrentColorScheme,
        }),
        [currentColorScheme]
      )}
    >
      <ChakraProvider
        theme={extendTheme(theme, withDefaultColorScheme({ colorScheme: currentColorScheme }))}
      >
        <Button>Button</Button>
        <ThemeSwitcher />
      </ChakraProvider>
    </ColorSchemeContext.Provider>
  );
};

export default App;
