const React = require('react');

const AssociateSearch = React.createClass({
    handleSearch: function() {
        const searchText = this.refs.searchText.value;

        this.propTypes.onSearch(searchText);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search Associates" onChange={this.handleSearch} />
                </div>
            </div>
    )
    }
});

module.exports= AssociateSearch;