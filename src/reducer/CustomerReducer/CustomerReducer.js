export default function reducerFn(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { details: action.payload };

    default:
      state;
  }
}
