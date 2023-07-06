/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */
import API from '../../utils/api';
import { receiveTalks } from '../talks/action';
import { setUserActionCreator } from '../users/action';

function asyncPopulateUsersAndTalks() {
  return async (dispatch) => {
    try {
      const users = await API.getAllUsers();
      const talks = await API.getAllTalks();

      dispatch(setUserActionCreator(users));
      dispatch(receiveTalks(talks));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndTalks };
