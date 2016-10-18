var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../components/Card');

describe('Card component', function() {
    it('Renders the Card',  function() {
        var text = "Card content";
        var title= "Card 1";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card content={text} title={title}/>);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card');

        var p = result.props.children[0];
        p.type.should.equal('p');
        p.props.children.should.equal(title);
        
        var content = result.props.children[1];
        content.type.should.equal('p');
        content.props.children.should.equal(text);
    });
});