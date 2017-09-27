const React = require('react');
const SearchList = require('SearchList');

const SearchApp = React.createClass({
    getInitialState: function() {
        return {
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
    render: function () {
        let {associates} = this.state;

        return (
            <div>
                <SearchList associates={associates} />
            </div>
        )
    }
});

module.exports = SearchApp;