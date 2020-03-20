import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {apiURL} from "../../constants";
import './ArtistItem.css';

const ArtistItem = props => {
    return (
        <Link to={"/artist/" + props.id}>
            <div className="card" style={{width: "18rem"}}>
                {props.image ? <img src={apiURL + '/uploads/' + props.image} className="card-img-top" alt="..."/> : null}
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
        </Link>
    );
};

ArtistItem.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ArtistItem;