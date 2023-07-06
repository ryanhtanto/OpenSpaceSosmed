/**
 * @TODO: Define all the actions (creator) for the talks state
 */
import API from '../../utils/api';

const ActionType = {
  RECEIVE_TALKS: 'RECEIVE_TALKS',
  ADD_TALK: 'ADD_TALK',
  TOGGLE_LIKE_TALK: 'TOGGLE_LIKE_TALK',
};

function receiveTalks(talks) {
  return {
    type: ActionType.RECEIVE_TALKS,
    payload: {
      talks,
    },
  };
}

function addTalk(talk) {
  return {
    type: ActionType.ADD_TALK,
    payload: {
      talk,
    },
  };
}

function toggleTalk({ talkId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_TALK,
    payload: {
      talkId,
      userId,
    },
  };
}

function asyncAddTalk({ text, replyTo = '' }) {
  return async (dispatch) => {
    try {
      const talk = await API.createTalk({ text, replyTo });
      dispatch(addTalk(talk));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToogleLikeTalk(talkId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleTalk({ talkId, userId: authUser.id }));

    try {
      await API.toggleLikeTalk(talkId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleTalk({ talkId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveTalks,
  addTalk,
  toggleTalk,
  asyncAddTalk,
  asyncToogleLikeTalk,
};
