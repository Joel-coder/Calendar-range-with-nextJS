const profile = (state, action) => {
  switch (action.type) {
    case "SET_CROPPED_PHOTO":
      return {
        ...state,
        croppedPhoto: action.payload,
      };
    default:
      state;
  }
};

export default profile;
