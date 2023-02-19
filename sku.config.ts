import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  publicPath: '.', // <-- Required for sku build output
  orderImports: true,
};

export default skuConfig;
