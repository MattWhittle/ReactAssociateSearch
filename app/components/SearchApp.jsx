const React = require('react');
const SearchList = require('SearchList');
const AssociateSearch = require('AssociateSearch');

const SearchApp = React.createClass({
    getInitialState: function() {
        return {
            searchText:'',
            associates: [
                {
                    id: 1,
                    name: 'Matt'
                },
                {
                    id: 2,
                    name: 'Danielle'
                },
                {
                    id: 3,
                    name: 'Jen'
                },
                {
                    id: 4,
                    name: 'Thom'
                }
            ]
        }
    },
    handleSearch: function(searchText) {
        this.setState({
            searchText: searchText.toLowerCase()
        })
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