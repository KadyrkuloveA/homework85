import axiosFm from "../../axiosFm";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

export const fetchTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});

export const fetchTracks = (id) => {
    return async (dispatch) => {
        const response = await axiosFm.get('/tracks?album=' + id);
        dispatch(fetchTracksSuccess(response.data));
    };
};
