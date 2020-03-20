import {FETCH_TRACK_HISTORY_SUCCESS} from "../actions/trackHistoryActions";

const initialState = {
    trackHistory: []
};

const trackHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACK_HISTORY_SUCCESS:
            return {...state, trackHistory: action.trackHistory};
        default:
            return state;
    }
};

export default trackHistoryReducer;
