import * as braid from 'braid-design-system';
import Fuse from 'fuse.js';
export const components = Object.keys(braid).map((component) => ({
  name: component,
}));
const fuse = new Fuse(components, {
  keys: ['name'],
});

export const searchResult = (query: string) => {
  return fuse.search(query).map((fuseResult) => fuseResult.item);
};
