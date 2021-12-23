const adverts = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_BUTTON":
            return {
                ...state,
                currentButton: action.payload,
            }

        //validation
        case "SET_FORM_VALID":
            return {
                ...state,
                formValid: action.payload,
            }
        case "SET_CAMPAIGN_NAME":
            return {
                ...state,
                campaignName: action.payload,
            }
        case "SET_CAMPAIGN_DESCRIPTION":
            return {
                ...state,
                campaignDescription: action.payload,
            }
        case "SET_ADVERT_AUDIENCE":
            return {
                ...state,
                advertAudience: action.payload,
            }
        case "SET_ADVERT_TYPE":
            return {
                ...state,
                advertType: action.payload,
            }
        case "SET_ADVERT_TITLE":
            return {
                ...state,
                advertTitle: action.payload,
            }
        case "SET_ADVERT_DESCRIPTION":
            return {
                ...state,
                advertDescription: action.payload,
            }
        //    E-Commerce
        case "SET_ECOMMERCE_TITLE":
            return {
                ...state,
                eCommerceTitle: action.payload,
            }
        case "SET_ECOMMERCE_CALL_TO_ACTION":
            return {
                ...state,
                eCommerceCallToAction: action.payload,
            }
        case "SET_ECOMMERCE_PRODUCT_URL":
            return {
                ...state,
                eCommerceProductUrl: action.payload,
            }
        case "SET_ECOMMERCE_PRICE":
            return {
                ...state,
                eCommercePrice: action.payload,
            }
        case "SET_ECOMMERCE_VOUCHER":
            return {
                ...state,
                eCommerceVoucher: action.payload,
            }
        //
        default:
            state;
    }
};

export default adverts;