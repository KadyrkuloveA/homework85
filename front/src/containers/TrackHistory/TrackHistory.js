import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import moment from 'moment';
import {fetchTrackHistory} from "../../store/actions/trackHistoryActions";

class TrackHistory extends Component {
    componentDidMount() {
        this.props.fetchTrackHistory();
    }

    render() {
        return (
            <Fragment>
                <h3>Your Track History</h3>
                <div>
                    <ul className="list-group list-group-flush mt-5">
                        {this.props.trackHistory.reverse().map(track => (
                            <li className="list-group-item" key={track._id}>{track.track.album.artist.name} - {track.track.title}  |  {moment(track.datetime).format('MMMM Do YYYY, h:mm:ss a')}</li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    trackHistory: state.trackHistory.trackHistory
});

const mapDispatchToProps = dispatch => ({
    fetchTrackHistory: () => dispatch(fetchTrackHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);