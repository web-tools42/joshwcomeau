import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getItemArray, getSubtotal } from '../reducers';
import { formatPriceForHumans } from '../helpers';

import CartItem from './CartItem';
import Button from './Button';

const Cart = () => {
  const items = useSelector(getItemArray);
  const subtotal = useSelector(getSubtotal);

  return (
    <Wrapper>
      <Top>
        <Title>Your Cart</Title>
        <Subtitle>
          {items.length} {items.length === 1 ? 'Item' : 'Items'}
        </Subtitle>

        <ItemList>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ItemList>
      </Top>
      <Bottom>
        <Total>
          Total: <strong>{formatPriceForHumans(subtotal)}</strong>
        </Total>
        <Button style={{ width: 140 }}>Purchase</Button>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 0;
  min-width: 300px;
  height: 100vh;
  background: #401f43;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  max-height: calc(100vh - 240px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
  padding-left: 32px;
  padding-right: 32px;
`;

const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  opacity: 0.75;
`;

const ItemList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  padding-top: 32px;
`;

const Total = styled.div`
  font-size: 22px;
`;
export default Cart;
