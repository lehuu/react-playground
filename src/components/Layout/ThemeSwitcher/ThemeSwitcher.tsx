import { Circle, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorScheme } from '../../../hooks';

const AVAILABLE_COLOR_SCHEMES = [
  'gray',
  'red',
  'orange',
  'green',
  'blue',
  'cyan',
  'purple',
  'pink',
] as const;

interface ThemeSwitcherProps {}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorScheme, switchColorScheme } = useColorScheme();

  return (
    <Flex gap={2} position='fixed' right={4} top={4}>
      <IconButton
        aria-label='Toggle Colorscheme'
        colorScheme='gray'
        onClick={() => {
          const index = AVAILABLE_COLOR_SCHEMES.findIndex((str) => str === colorScheme);
          switchColorScheme(
            index > -1
              ? AVAILABLE_COLOR_SCHEMES[(index + 1) % AVAILABLE_COLOR_SCHEMES.length]
              : AVAILABLE_COLOR_SCHEMES[0]
          );
        }}
      >
        <Circle size='50%' bg={`${colorScheme}.600`} />
      </IconButton>
      <IconButton colorScheme='gray' onClick={toggleColorMode} aria-label='Toggle Dark/Light Mode'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Flex>
  );
};
