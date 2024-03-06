const actionsCreator = {
  LOADING: "LOADING",
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
};

const initialState = {
  loading: false,
  failure: false,
  success: false,
  nextPage: 1,
  photos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return {
        ...state,
        success: true,
        loading: false,
        photos: [...action.photos],
        nextPage: nextPage,
      };
    case "FAILURE":
      return { ...state, failure: true, loading: false };
  }
};
