// @flow
import {
  PURCHASE_UPGRADE,
  CLICK_VOXEL,
  EARN_PASSIVE_INCOME
} from '../actions';
import type { Action } from '../types/Action.type';


const initialState = 1000;

export default function bankBalance(
  state: number = initialState,
  action: Action
) {
  switch (action.type) {
    case CLICK_VOXEL: {
      return state + action.value;
    }

    case EARN_PASSIVE_INCOME: {
      return state + action.amount;
    }

    case PURCHASE_UPGRADE: {
      return state - action.cost;
    }

    default: return state;
  }
}


// Selectors
export const getBankBalance = (state: Object) => state.bankBalance;
