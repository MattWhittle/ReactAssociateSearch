const React = require('react');
const SearchList = require('SearchList');
const AssociateSearch = require('AssociateSearch');

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
        let {associates} = this.state;

        return (
            <div>
                <AssociateSearch onSearch={this.handleSearch} />
                <SearchList associates={associates} />
            </div>
        )
    }
});

module.exports = SearchApp;