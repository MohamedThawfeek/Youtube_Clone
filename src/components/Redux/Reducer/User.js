const initialState = {
  user: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        user: action.user,
      };

    default:
      return state;
  }
};

export default appReducer;
