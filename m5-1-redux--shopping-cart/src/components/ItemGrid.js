import React from 'react';
import styled from 'styled-components';

import { STORE_ITEMS } from '../data';

import StoreItem from './StoreItem';

const ItemGrid = () => {
  return (
    <Wrapper>
      {STORE_ITEMS.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

export default ItemGrid;
