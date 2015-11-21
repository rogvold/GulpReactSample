var React = require('react');
var assign = require('object-assign');

var App = React.createClass({
    getDefaultProps: function () {
        return {}
    },

    getInitialState: function () {
        return {}
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {}
    },

    render: function () {

        return (
            <div style={this.componentStyle.placeholder}>
                Hello World!
            </div>
        );
    }

});


React.render((<App />

), document.getElementById('main'));
