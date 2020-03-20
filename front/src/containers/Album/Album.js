import React, {Component, Fragment} from 'react';
import {fetchAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";
import {fetchTracks} from "../../store/actions/tracksActions";
import {addTrackToHistory} from "../../store/actions/trackHistoryActions";

class Album extends Component {
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.id);
        this.props.fetchTracks(this.props.match.params.id);
    }

    render() {
        return (
            <Fragment>
                <h3>{this.props.artistName.name}</h3>
                <h4>{this.props.album.title}</h4>
                <div>
                    <ul className="list-group list-group-flush mt-5">
                        {this.props.tracks.map(track => (
                            <li className="list-group-item" onClick={() => this.props.addTrackToHistory(track._id)} key={track._id}>{track.order}. {track.title} {track.duration}sec</li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    album: state.albums.album,
    artistName: state.albums.artistName,
    tracks: state.tracks.tracks
});

const mapDispatchToProps = dispatch => ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    fetchTracks: (id) => dispatch(fetchTracks(id)),
    addTrackToHistory: (id) => dispatch(addTrackToHistory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);