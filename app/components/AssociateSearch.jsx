const React = require('react');

const AssociateSearch = React.createClass({
    handleSearch: function() {
        const searchText = this.refs.searchText.value;

        this.props.onSearch(searchText);
    },
    render: function () {
        return (
            <div>
                <input type="search" ref="searchText" placeholder="Search Associates" onChange={this.handleSearch} />
            </div>
    )
    }
});

module.exports= AssociateSearch;