import {FETCH_ALBUM_SUCCESS, FETCH_ALBUMS_SUCCESS} from "../actions/albumsActions";

const initialState = {
    albums: [],
    album: [],
    artistName: {}
};

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return {...state, albums: action.albums};
        case FETCH_ALBUM_SUCCESS:
            return {...state, album: action.album, artistName: action.album.artist};
        default:
            return state;
    }
};

export default albumsReducer;