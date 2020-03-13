import React, {Component} from 'react';
import {fetchArtist} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import {apiURL} from "../../constants";
import {fetchAlbums} from "../../store/actions/albumsActions";
import {Link} from "react-router-dom";
import "./Artist.css";

class Artist extends Component {
    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.id);
        this.props.fetchAlbums(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-start justify-content-around">
                    <div className="card" style={{maxWidth: "500px"}}>
                        <img src={apiURL + '/uploads/' + this.props.artist.image} className="card-img" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.artist.name}</h5>
                            <p className="card-text">{this.props.artist.description}</p>
                        </div>
                    </div>
                    <div className="card-deck col-5 row flex-wrap">
                        {this.props.albums.map(album => (
                            <div className="card" style={{maxWidth: "200px"}}>
                                <Link to={"/album/" + album._id}>
                                    <img src={apiURL + '/uploads/' + album.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{album.title}</h5>
                                        <p className="card-text"><small className="text-muted">{album.date}</small></p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artist: state.artists.artist,
    albums: state.albums.albums
});

const mapDispatchToProps = dispatch => ({
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchAlbums: (id) => dispatch(fetchAlbums(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);