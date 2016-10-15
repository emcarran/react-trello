var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props){
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    );
};

var List = React.createClass({
    render: function(props) {
        var cards = [];
        for (var i=0; i<=3; i++) {
            cards.push(<card/>);
        }
        var listTitleArray = ['List 1'];
        return (
            <div>
                <p>{props.title}</p>
                <p>{props.cards}</p>
            </div>
        );
    }
});

var Board = React.createClass({
    render: function(props) {
        var boardList = [];
        for (var i=0; i<=3; i++) {
            boardList.push(<List/>);
        }
        var listTitleArray = ['List 1','List 2','List 3'];
        return (
            <div>
                <p>{props.title}</p>
                <p>{props.boardList}</p>
                <List title={listTitleArray[0]} />
            </div>
            
        );
    }
});

//Doc listener and React renderer
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<List/>, document.getElementById('app'));
});