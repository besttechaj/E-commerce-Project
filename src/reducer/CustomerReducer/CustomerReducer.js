export default function reducerFn(state, action) {
  switch (action.type) {
    //* user data
    case 'FETCH_DATA':
      return { ...state, details: action.payload };

    case 'READ_USER':
      return { ...state, readData: action.payload };

    case 'UPDATE_USER':
      return { ...state, updateData: action.payload };

    //* courses
    case 'FETCH_COURSE':
      return { ...state, Courses: action.payload };

    //* user logged-in
    case 'USER_LOGGEDIN':
      return { ...state, user_loggedIn: !state.user_loggedIn };

    default:
      state;
  }
}
