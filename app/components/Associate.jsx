const React = require('react');

const Associate = React.createClass({
    render: function () {
        let {Display_Name,Title,Email,Phone} = this.props;
        return (
            <div>
                <h3>{Display_Name}</h3>
                <h4>{Title}</h4>
                <p>{Email}</p>
                <p>{Phone}</p>
            </div>
        )
    }
});

module.exports = Associate;