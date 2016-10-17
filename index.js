var React = require('react');
var ReactDOM = require('react-dom');

//Card component, stateless, has items passed in via 'props' by parent, List
var Card = function(props) {
    return (
            <div className="card">
            <p>{props.title}</p>
            <p>{props.content}</p>
            </div>
    );
};

//creating a simple Button component used below in the List
var Button = function(props) {
    return <button onClick={props.onClick}>Add Card </button>;    
}

//creates a stateful component named 'List'
var List = React.createClass({
    //Gets the initial state
    getInitialState: function() {
        return {
            text: '',
            cards: [],
            list: ["List 1"],
        };
    },
    onAddInputChanged: function(event) {
        console.log("Typed in input box");
        this.setState({
            text: event.target.value
            });
    },
    //button clicking callback function, contains all the logic for updating the state
    onAddSubmit: function(event) {
        event.preventDefault();
        console.log("Call to add new card");   
            //have to set this.state.text to a var prior to clearing the state back to ''
            var card = [this.state.text];
            //clears the text state, adds the card text into the card array using concat.  Tried .push, didn't work
            this.setState({
                text:'',
                cards: this.state.cards.concat(card)
            });
    },
    render: function(){
        //Array of List titles
        var listTitleArray = ['List 1'];

        //displays list title from array above, should be moved up into state - TODO
        //cards are displayed from state of cards, mapped to card content/title
        return (
            <div>
                {/*List #1*/}
                <div className="list">{this.state.list}</div>
                
                <div>
                {this.state.cards.map(function(text) {
                    return <Card className="card" content={text} />;
                })}
                </div>
                
                <div className="input"><input type="text" placeholder="new card" value={this.state.text} onChange={this.onAddInputChanged} /> </div>
                <div className="input"><button onClick={this.onAddSubmit}>add card</button></div>
                
                </div>
            
        );
    }
});
//creates a stateful component named 'List'
var ListContainer = React.createClass({
    //Gets the initial state
    getInitialState: function() {
        return {
            clicked: false,
            text: '',
            cardsArray: [],
        };
    },
    //button clicking callback function, where the add card stuff should go
    onAddSubmit: function() {
        event.preventDefault();
        console.log("Call to add new card");        
    },
    onAddInputChanged: function() {
        event.preventDefault();
        console.log("Typed in input box");
    },
    render: function(){
        
        //Array of List titles
        var listTitleArray = ['List 1','List 2','List 3'];
        var cardArray = [];
        
        return (
            <div>
                {/*Render a List, passing in the title as an index to list title array*/}
                <div>
                <List title={listTitleArray[0]} />
                </div>
                
                
                <Card content="This is the stuff for 1" title="Card 1" />
                <Card content="Card 2 stuff goes here" title="Card 2" />
                <Card content="Card 3 goodies in here" title="Card 3" />
                
                </div>
            
        );
    }
});


//Doc listener and React renderer
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<ListContainer/>, document.getElementById('app'));
});