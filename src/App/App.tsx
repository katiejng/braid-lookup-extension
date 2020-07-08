import 'braid-design-system/reset'; // <-- Must be first
import { BraidLoadableProvider, Box, Stack } from 'braid-design-system';
import React from 'react';

import braidLogo from '../assets/logo.png';

import Search from './Search';
interface AppProps {
  site: string;
}

export default ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <Box padding="small" style={{ minWidth: 300 }}>
      <Stack space="medium">
        <img src={braidLogo} alt="braid" width="300" />
        <Search />
      </Stack>
    </Box>
  </BraidLoadableProvider>
);
