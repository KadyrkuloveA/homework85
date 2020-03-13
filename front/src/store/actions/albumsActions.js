import axiosFm from "../../axiosFm";

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';

export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});
export const fetchAlbumSuccess = album => ({type: FETCH_ALBUM_SUCCESS, album});


export const fetchAlbums = (id) => {
    return async (dispatch) => {
        const response = await axiosFm.get('/albums?artist=' + id);
        dispatch(fetchAlbumsSuccess(response.data));
    };
};

export const fetchAlbum = (id) => {
    return async (dispatch) => {
        const response = await axiosFm.get('/albums/' + id);
        dispatch(fetchAlbumSuccess(response.data));
    };
};

