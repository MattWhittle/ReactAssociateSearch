const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const AssociateApi = require('../../api/AssociateApi');

describe('AssociateApi', ()=>{
    it('should exist', ()=>{
        expect(AssociateApi).toExist();
    });

    let associates = [{
        "id": 1001,
        "Display_Name": "Bob Boone",
        "First_Name": "Bob",
        "Last_Name": "Boone",
        "Title": "Catcher",
        "Email": "winner@worldseries1980.com",
        "Phone": "215-555-5555"
      },
      {
        "id": 1002,
        "Display_Name": "Larry Bowa",
        "First_Name": "Larry",
        "Last_Name": "Bowa",
        "Title": "Shortstop",
        "Email": "winner@worldseries1980.com",
        "Phone": "215-555-5555"
      },
      {
        "id": 1003,
        "Display_Name": "Pat Burrell",
        "First_Name": "Pat",
        "Last_Name": "Burrell",
        "Title": "Left field",
        "Email": "winner@worldseries2008.com",
        "Phone": "215-555-5555"
      },]
    it('should filter associates by search text', ()=>{
        let filteredAssociates = AssociateApi.filterAssociates(associates, 'bo');
        expect(filteredAssociates.length).toBe(2);
    });
    it('should return all associates if search text length is 0', ()=>{
        let filteredAssociates = AssociateApi.filterAssociates(associates, '');
        expect(filteredAssociates.length).toBe(3);
    });
});