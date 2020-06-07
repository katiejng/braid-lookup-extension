import {
  Text,
  TextLink,
  Stack,
  TextField,
  IconSearch,
} from 'braid-design-system';
import React, { useState, useRef } from 'react';

import { searchResult, components } from './utils/componentList';
import { getBraidDocUrl } from './utils/helpers';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const searchResults = useRef(components);

  const resultItem = (component: { name: string }) => (
    <Text key={component.name}>
      <TextLink target="_blank" href={getBraidDocUrl(component.name)}>
        {component.name}
      </TextLink>
    </Text>
  );

  return (
    <Stack space="small">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchResults.current.length > 0) {
            const win = window.open(
              getBraidDocUrl(searchResults.current[0].name),
              '_blank',
            );
            win?.focus();
          }
        }}
      >
        <TextField
          autoFocus
          icon={<IconSearch />}
          id="component-search"
          placeholder="Search"
          onChange={(event) => {
            setSearchText(event.currentTarget.value);
            if (event.currentTarget.value === '') {
              searchResults.current = components;
            } else {
              searchResults.current = searchResult(event.currentTarget.value);
            }
          }}
          value={searchText}
        />
      </form>

      {searchResults.current.map((component) => resultItem(component))}
    </Stack>
  );
};

export default Search;
