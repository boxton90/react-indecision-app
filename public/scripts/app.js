'use strict';

var app = {
    title: 'Visibility toggle',
    message: 'Hey ! This is a secret message!',
    showMessage: false
};

var toggleShowMessage = function toggleShowMessage() {
    app.showMessage = !app.showMessage;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleShowMessage },
            app.showMessage ? 'Hide' : 'Show',
            ' Details'
        ),
        app.showMessage && React.createElement(
            'p',
            null,
            app.message
        )
    );
    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

renderApp();
