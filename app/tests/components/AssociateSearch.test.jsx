const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const AssociateSearch = require('AssociateSearch');

describe('AssociateSearch', ()=>{
    it('should exist', ()=>{
        expect(AssociateSearch).toExist();
    });
    it('should call onSearch with entered input text',()=>{
        var searchText = 'Matt';
        var spy = expect.createSpy();
        var associateSearch = TestUtils.renderIntoDocument(<AssociateSearch onSearch={spy}/>);

        associateSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(associateSearch.refs.searchText);
        
        expect(spy).toHaveBeenCalledWith('Matt');
    });
});