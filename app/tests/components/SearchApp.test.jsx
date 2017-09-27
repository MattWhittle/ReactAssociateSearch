const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const SearchApp = require('SearchApp');

describe('SearchApp', ()=>{
    it('should exist', ()=> {
        expect(SearchApp).toExist();
    });
});