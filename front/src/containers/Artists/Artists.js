import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/artistsActions";
import ArtistItem from "../../components/ArtistItem/ArtistItem";

class Artists extends Component {
    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        return (
            <div className="card-deck">
                {this.props.artists.map(artist => (
                    <ArtistItem
                        key={artist._id}
                        name={artist.name}
                        id={artist._id}
                        image={artist.image}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists.artists
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);