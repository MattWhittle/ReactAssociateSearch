const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const Associate = require('Associate');

describe('Associate', ()=>{
    it('should exist', ()=> {
        expect(Associate).toExist();
    });
});
