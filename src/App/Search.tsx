import {
  Text,
  TextLink,
  Stack,
  TextField,
  IconSearch,
  IconNewWindow,
  Box,
} from 'braid-design-system';
import React, { useState, useRef, useEffect } from 'react';

import {
  searchResult,
  getComponents,
  ComponentItem,
} from './utils/componentList';
import { getBraidDocUrl } from './utils/helpers';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<ComponentItem[]>([]);
  const initialComponents = useRef<ComponentItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const componentList = await getComponents();
      initialComponents.current = componentList;
      setSearchResults(componentList);
    }
    fetchData();
  }, []);

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
          if (searchResults.length > 0) {
            const win = window.open(
              getBraidDocUrl(searchResults[0].name),
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
              setSearchResults(initialComponents.current);
            } else {
              setSearchResults(
                searchResult(searchResults, event.currentTarget.value),
              );
            }
          }}
          value={searchText}
        />
      </form>

      {searchResults.map((component, index) =>
        resultItem(component, index === 0),
      )}
    </Stack>
  );
};

export default Search;
