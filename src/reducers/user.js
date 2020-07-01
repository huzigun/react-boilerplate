const initailState = {
  me: null,
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        me: action.data,
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        me: null,
      };
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
      };
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        me: null,
      };
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
