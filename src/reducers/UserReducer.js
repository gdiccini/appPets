export const initialState = {
  avatar: '',
  pets: [],
};

export const UserReducer = () => {
  switch(action.type){
    case 'setAvatar':
      return { ...state, avatar: action.payload.avatar };
    default:
      return state;
  }
}