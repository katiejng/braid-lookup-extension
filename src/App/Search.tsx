import {
  Text,
  TextLink,
  Stack,
  TextField,
  IconSearch,
} from 'braid-design-system';
import React, { useState } from 'react';
import { searchResult, components } from './componentList';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([{ name: '' }]);

  const resultItem = (component: { name: string }) => (
    <Text key={component.name}>
      <TextLink
        target="_blank"
        href={`https://seek-oss.github.io/braid-design-system/components/${component.name}`}
      >
        {component.name}
      </TextLink>
    </Text>
  );

  const results = searchText === '' ? components : searchResults;

  return (
    <Stack space="small">
      <TextField
        icon={<IconSearch />}
        id="component-search"
        placeholder="Search"
        onChange={(event) => {
          setSearchText(event.currentTarget.value);
          setSearchResults(searchResult(searchText));
        }}
        value={searchText}
      />

      {results.map((component) => resultItem(component))}
    </Stack>
  );
};

export default Search;
