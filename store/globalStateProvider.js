import React, {createContext, useReducer} from "react";
import authInitialState from "./initialState/authInitialState";
import exampleInitialState from "./initialState/exampleInitialState";
import audienceInitialState from "./initialState/audienceInitialState";
import offerInitialState from "./initialState/offerInitialState";
import profileInitialState from "./initialState/profileInitialState";
import advertsInitialState from "./initialState/advertsInitialState";

import auth from "./reducers/auth";
import example from "./reducers/example";
import audience from "./reducers/audience";
import offer from "./reducers/offer";
import profile from "./reducers/profile";
import adverts from "./reducers/adverts";

export const GlobalContext = createContext({});

export const GlobalStateProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [exampleState, exampleDispatch] = useReducer(example, exampleInitialState);
    const [audienceState, audienceDispatch] = useReducer(audience, audienceInitialState);
    const [offerState, offerDispatch] = useReducer(offer, offerInitialState);
    const [profileState, profileDispatch] = useReducer(profile, profileInitialState);
    const [advertState, advertDispatch] = useReducer(adverts, advertsInitialState);

    return (
        <GlobalContext.Provider
            value={{
                authState,
                authDispatch,
                exampleState,
                exampleDispatch,
                audienceState,
                audienceDispatch,
                offerState,
                offerDispatch,
                profileState,
                profileDispatch,
                advertState,
                advertDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalStateProvider;
