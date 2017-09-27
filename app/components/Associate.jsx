const React = require('react');

const Associate = React.createClass({
    render: function () {
        let {name, id} = this.props;
        return (
            <div>
                {id}. {name}
            </div>
        )
    }
});

module.exports = Associate;