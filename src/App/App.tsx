import 'braid-design-system/reset'; // <-- Must be first
import { Box, Stack, BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';

// @ts-expect-error
import braidLogo from '../assets/logo.png';

import Search from './Search';

export default () => (
  <BraidProvider theme={apac}>
    <Box padding="small" style={{ minWidth: 300 }}>
      <Stack space="medium">
        <img src={braidLogo} alt="braid" width="300" />
        <Search />
      </Stack>
    </Box>
  </BraidProvider>
);
