const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const SearchApp = require('SearchApp');

//Load Foundation
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
    <SearchApp />,
    document.getElementById('app')
);
