import React from 'react';

const Artist = (props) => {
    return (
        <div className="artist">
            <div className="artist_info">
                <p>{props.name}</p>
                <p>{props.followers} followers</p>
                <p>{props.genres}</p>

                
            </div>

            <figure className="artist_image">
                    <img src={props.imageUrl} alt="artist"/>
                </figure>
        </div>
    );
};

export default Artist;