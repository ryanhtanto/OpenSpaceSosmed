/**
 * @TODO: Define all the actions (creator) for the users state (register)
 */
import API from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function setUserActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async () => {
    try {
      await API.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setUserActionCreator,
  asyncRegisterUser,
};
