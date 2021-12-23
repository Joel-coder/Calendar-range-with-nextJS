const audience = (state, action) => {
    switch (action.type) {
        case "SET_AUDIENCE_NAME":
            return {
                ...state,
                audienceName: action.payload,
            }
        case "SET_AUDIENCE_DESCRIPTION":
            return {
                ...state,
                audienceDescription: action.payload,
            }
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload,
            };
        case "SET_LOCATION_NAME":
            return {
                ...state,
                locationName: action.payload,
            };
        case "SET_RADIUS":
            return {
                ...state,
                setMapRadius: action.payload,
            };
        case "SET_GENDER":
            return {
                ...state,
                gender: action.payload,
            };
        case "SET_START_AGE":
            return {
                ...state,
                startAge: action.payload,
            };
        case "SET_ENDING_AGE":
            return {
                ...state,
                endingAge: action.payload,
            };
        case "SET_CRED_VALUE":
            return {
                ...state,
                credValue: action.payload,
            };
        case "SET_PLATFORM":
            return {
                ...state,
                platform: action.payload,
            };
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload,
            };
        case "SET_PLAN_SELECT":
            return {
                ...state,
                planSelect: action.payload,
            };
        case "SET_INTEREST":
            return {
                ...state,
                interest: action.payload,
            };
        case "SET_BASIC_PLAN":
            return {
                ...state,
                basicPlan: action.payload,
            };
        case "SET_ADVANCE_PLAN":
            return {
                ...state,
                advancePlan: action.payload,
            };
        case "SET_BEHAVIORAL_PLAN":
            return {
                ...state,
                behavioralPlan: action.payload,
            };
        case "SET_AUDIENCE_ID":
            return {
                ...state,
                audienceId: action.payload,
            };
        case "SET_LAST_STATE":
            return {
                ...state,
                lastState: action.payload,
            };
        case "SET_TOKEN":
            return {
                ...state,
                testToken: action.payload,
            };
        default:
            state;
    }
};

export default audience;