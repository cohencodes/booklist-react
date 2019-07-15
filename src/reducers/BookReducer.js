export const bookReducer = (state, action) => {
  console.log(state);
  // create a new id for each new book
  const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
