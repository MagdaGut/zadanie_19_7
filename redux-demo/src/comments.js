import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

function reducer(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      const comment = {
        id: action.id,
        text: action.text,
        votes: 0
      };

      return [...state, comment];

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id)


    case EDIT_COMMENT:
    {
      const idx = state.findIndex(comment => comment.id === action.id);
      if (idx !== -1) {
        const comments = [...state];
        comments[idx] = {...state[idx], text: action.text};
        return comments
      }

      return state;
    }

    case THUMB_UP_COMMENT:
    {
      const idx = state.findIndex(comment => comment.id === action.id);
      if (idx !== -1) {
        const comments = [...state];
        const comment = state[idx];
        comments[idx] = {...state[idx], votes: comment.votes + 1};
        return comments
      }

      return state;
    }


    case THUMB_DOWN_COMMENT:
    {
      const idx = state.findIndex(comment => comment.id === action.id);
      if (idx !== -1) {
        const comments = [...state];
        const comment = state[idx];
        comments[idx] = {...state[idx], votes: comment.votes - 1};
        return comments
      }

      return state;
    }

    default:
      return state;
  }
}

export default reducer