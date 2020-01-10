const initialState = {
  currentPage: "SwipeScreen", //estado inicial é a página de swipes
};


//Reducer com ação para mudar a página atual

export default (state = initialState, action) => {

  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return { currentPage: action.payload.newPage }
    default:
      return state;
  }
}
