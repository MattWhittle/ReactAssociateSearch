const React = require('react');
const SearchList = require('SearchList');
const AssociateSearch = require('AssociateSearch');
const AssociateApi = require('../api/AssociateApi')

import ASSOCIATES from '../api/associates.json';

const SearchApp = React.createClass({
    getInitialState: function() {
        return {
            searchText:'',
            associates: ASSOCIATES
        }
    },
    handleSearch: function(searchText) {
        this.setState({
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        let {associates, searchText} = this.state;
        let filteredAssociates = AssociateApi.filterAssociates(associates, searchText);

        return (
            <div>
                <h1 className="component-title">Associate Search</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <AssociateSearch onSearch={this.handleSearch} />
                            <SearchList associates={filteredAssociates} /></div>
                        </div>
                </div>
            </div>
        )
    }
});

module.exports = SearchApp;