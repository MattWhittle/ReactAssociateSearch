const React = require('react');
const Associate = require('Associate');

const SearchList = React.createClass({
    render: function () {
        let {associates} = this.props;
        const renderAssociates = ()=> {
            return associates.map((associate) => {
                return (
                    <Associate key={associate.id} {...associate}/>
                );
            });
        };
        
        return (
            <div>
                {renderAssociates()}
            </div>
        )
    }
});

module.exports = SearchList;