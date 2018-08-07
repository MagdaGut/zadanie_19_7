import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export const addComment = (text) => ({
  type: ADD_COMMENT,
  text,
  id: uuid.v4()
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  id
});

export const editComment = (id, text) => ({
  type: EDIT_COMMENT,
  text,
  id
});

export const thumbUpComment = (id) => ({
  type: THUMB_UP_COMMENT,
  id
});

export const thumbDownComment = (id) => ({
  type: THUMB_DOWN_COMMENT,
  id
});

export default {
  addComment,
  removeComment,
  editComment,
  thumbUpComment,
  thumbDownComment
}