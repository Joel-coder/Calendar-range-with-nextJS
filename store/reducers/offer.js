const offer = (state, action) => {
        switch (action.type) {
            case "SET_OFFER_NAME":
                return {
                    ...state,
                    offerName: action.payload,
                }
            default:
                state;
        }
    }
;
export default offer;