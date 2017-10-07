const React = require('react');

const AssociateSearch = React.createClass({
    handleSearch: function() {
        const searchText = this.refs.searchText.value;

        this.props.onSearch(searchText);
    },
    render: function () {
        return (
            <div className="container__header">
                <input type="search" ref="searchText" placeholder="Search Associates by Name" onChange={this.handleSearch} />
            </div>
    )
    }
});

module.exports= AssociateSearch;