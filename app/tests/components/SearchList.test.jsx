const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const SearchList = require('SearchList');
const Associate = require('Associate');

describe('SearchList', ()=>{
    it('should exist', ()=> {
        expect(SearchList).toExist();
    });

    it('should render one Associate for each Associate in array', ()=>{
        const associates = [{
            id: 1,
            name: 'Matt'
        },
        {
            id: 2,
            name: 'Danielle'
        }];
        const searchList = TestUtils.renderIntoDocument(<SearchList associates={associates}/>);
        const searchComponents = TestUtils.scryRenderedComponentsWithType(searchList, Associate);

        expect(searchComponents.length).toBe(associates.length);
    });
});