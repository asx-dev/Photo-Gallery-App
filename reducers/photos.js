export const types = {
  LOADING: "LOADING",
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
};

export const initialState = {
  loading: false,
  failure: false,
  nextPage: 1,
  photos: [],
};

export const actionsCreator = {
  loading: () => ({ type: types.LOADING }),
  failure: () => ({ type: types.FAILURE }),
  success: (photos, page) => ({
    type: types.SUCCESS,
    payload: { photos, page },
  }),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true };
    case types.SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        photos: [...state.photos, ...action.payload.photos],
        nextPage: state.nextPage + 1,
      };
    case types.FAILURE:
      return { ...state, failure: true, loading: false };
  }
};
