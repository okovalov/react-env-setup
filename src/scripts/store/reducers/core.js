import { combineReducers } from 'redux';

import CONSTANTS from '../../config/constants';
import vehicleReducer from './vehicles';

const initialState = {
  vehicles: [],
};

const vehicles = (state = initialState.vehicles, action) => {
  const handlers = {
    [CONSTANTS.FETCH_SUCCESS]: vehicleReducer,
  };

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};

// import tools from '../../services/tools';

// function sortReducer(state, order, column) {
//   switch (order) {
//     case CONSTANTS.SORT_ASC:
//       return state.sort(tools.sortAsc(column));

//     case CONSTANTS.SORT_DESC:
//       return state.sort(tools.sortDesc(column));

//     default:
//       return state;
//   }
// }

// any name below should be the same as we are using in any Component/Container to access a data
const rootReducer = combineReducers({
  vehicles,
});

export default rootReducer;
