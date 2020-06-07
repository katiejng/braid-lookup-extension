import {
  Text,
  TextLink,
  Stack,
  TextField,
  IconSearch,
  IconNewWindow,
  Heading,
  Box,
} from 'braid-design-system';
import React, { useState, useRef } from 'react';

import { searchResult, components } from './utils/componentList';
import { getBraidDocUrl } from './utils/helpers';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const searchResults = useRef(components);

  const resultItem = (component: { name: string }, first: boolean) => (
    <Box display="flex" flexDirection="row" marginY={first ? 'small' : 'none'}>
      <Text key={component.name} size={first ? 'large' : 'standard'}>
        <TextLink target="_blank" href={getBraidDocUrl(component.name)}>
          {component.name}
        </TextLink>
      </Text>
      {first && (
        <Box display="flex" paddingLeft="xsmall">
          <Text tone="secondary">
            <IconNewWindow /> Press enter to open
          </Text>
        </Box>
      )}
    </Box>
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
          autoComplete={'off'}
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

      {searchResults.current.map((component, index) =>
        resultItem(component, index === 0),
      )}
    </Stack>
  );
};

export default Search;
