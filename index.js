var React = require('react');
var ReactDOM = require('react-dom');

var card = function(){
    return (
        <div className="card">This is a card</div>
    );
}

var List = React.createClass({
    render: function() {
        var cards = [];
        for (var i=0; i<=3; i++) {
            cards.push(<card/>);
        }
        return (
            <div className="list">
                {card}
            </div>
        );
    }
});

var Board = React.createClass({
    render: function() {
        var boardList = [];
        for (var i=0; i<=3; i++) {
            boardList.push(<list/>);
        }
        return (
            <div className="board">
                {boardList}
            </div>
        );
    }
});


//Doc listener and React renderer
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board/>, document.getElementById('app'));
});