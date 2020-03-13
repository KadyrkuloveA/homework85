import axiosFm from "../../axiosFm";

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTIST_SUCCESS = 'FETCH_ARTIST_SUCCESS';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});
export const fetchArtistSuccess = artist => ({type: FETCH_ARTIST_SUCCESS, artist});


export const fetchArtists = () => {
    return async (dispatch) => {
        const response = await axiosFm.get('/artists');
        dispatch(fetchArtistsSuccess(response.data));
    };
};

export const fetchArtist = (id) => {
    return async (dispatch) => {
        const response = await axiosFm.get('/artists/' + id);
        dispatch(fetchArtistSuccess(response.data));
    };
};

