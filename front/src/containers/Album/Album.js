import React, {Component} from 'react';
import {fetchAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";
import {fetchTracks} from "../../store/actions/tracksActions";
import "./Album.css";

class Album extends Component {
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.id);
        this.props.fetchTracks(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container">
                <h3>{this.props.artistName.name}</h3>
                <h4>{this.props.album.title}</h4>
                <div>
                    <ul className="list-group list-group-flush mt-5">
                        {this.props.tracks.map(track => (
                            <li className="list-group-item">{track.order}. {track.title} {track.duration}sec</li>
                        ))}
                    </ul>
                </div>
            </div>
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
    fetchTracks: (id) => dispatch(fetchTracks(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);