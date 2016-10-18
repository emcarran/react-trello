var React = require('react');

//Card component, stateless, has items passed in via 'props' by parent, List
var Card = function(props) {
    return (
            <div className="card">
            <p>{props.title}</p>
            <p>{props.content}</p>
            </div>
    );
};
module.exports = Card;