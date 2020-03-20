import axiosFm from "../../axiosFm";
import {push} from 'connected-react-router';

export const FETCH_TRACK_HISTORY_SUCCESS = 'FETCH_TRACK_HISTORY_SUCCESS';

const fetchTrackHistorySuccess = (trackHistory) => ({type: FETCH_TRACK_HISTORY_SUCCESS, trackHistory});

export const fetchTrackHistory = () => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;
            const response = await axiosFm.get('/track_history', {headers: {"Authorization": "Token " + token}});
            dispatch(fetchTrackHistorySuccess(response.data));
        } catch (error) {
            dispatch(push('/register'));
        }
    }
};

export const addTrackToHistory = (trackId) => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;

            await axiosFm.post('/track_history', {track: trackId}, {headers: {"Authorization": "Token " + token}});
        } catch (error) {
            dispatch(push('/register'));
        }
    }
};

