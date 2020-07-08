import axios from 'axios';
import * as braid from 'braid-design-system';
import Fuse from 'fuse.js';

export type ComponentItem = {
  name: string;
};
export const searchResult = (componentList: ComponentItem[], query: string) => {
  const fuse = new Fuse(componentList, {
    keys: ['name'],
  });
  return fuse.search(query).map((fuseResult) => fuseResult.item);
};

export const getComponents = async () => {
  try {
    const result = await axios.get(
      'https://seek-oss.github.io/braid-design-system/',
    );
    const dom = result.data;
    const regex = new RegExp('/components/([a-z]*)', 'gi');
    const found = dom.match(regex);
    const componentList = found
      .map((component: string) => component.split('/')[2])
      .sort();
    const fuseResult = removeDuplicates(componentList).map(
      (component: string) => ({
        name: component,
      }),
    );

    return fuseResult;
  } catch (err) {
    console.log('ERROR', err);
    return Object.keys(braid).map((component) => ({
      name: component,
    }));
  }
};
function removeDuplicates(array: string[]) {
  return [...new Set(array)];
}
