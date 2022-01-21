import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { x } from 'react-icons-kit/feather/x';

import { updateQuantity, removeItem } from '../actions';

import UnstyledButton from './UnstyledButton';

const CartItem = ({ item }) => {
  const itemQuantity = useSelector((state) => state.items[item.id].quantity);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        {item.title}
        <CloseBtn onClick={() => dispatch(removeItem(item.id))}>
          <Icon icon={x} />
        </CloseBtn>
      </Header>
      <Body>
        Quantity:{' '}
        <TextInput
          value={itemQuantity}
          onChange={(ev) => dispatch(updateQuantity(item.id, ev.target.value))}
        />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  margin: 0 -16px;
  margin-bottom: 16px;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 21px;
  font-weight: 500;
  padding: 8px 16px;
`;

const CloseBtn = styled(UnstyledButton)`
  padding: 8px 0px;
`;

const Body = styled.div`
  font-size: 17px;
  color: #ccc;
  background: rgba(0, 0, 0, 0.25);
  padding: 8px 16px;
`;

const TextInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 3px solid white;
  width: 30px;
  height: 30px;
  color: white;
  font-size: inherit;
  padding: 4px;
  text-align: center;
  font-weight: bold;
`;

export default CartItem;
