import React from 'react';
import faker from 'faker';

const PostCard = props => {
    return (
        <div>
        <div className="ui comments">
        <div className="comment">
            <a className="avatar">
            <img src={faker.image.avatar()} />
            </a>
            <div className="content">
            <a className="author">{props.title}</a>
            <div className="metadata">
                <div className="date">2 days ago</div>
                <div className="rating">
                <i className="star icon"></i>
                5 Faves
                </div>
            </div>
            <div className="text">
                <p>{props.content}</p>
            </div>
            </div>
        </div>
        </div>

        </div>
    )
}

export default PostCard;


