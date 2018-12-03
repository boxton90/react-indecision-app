const app = {
    title: 'Visibility toggle',
    message: 'Hey ! This is a secret message!',
    showMessage: false
}

const toggleShowMessage = () => {
    app.showMessage = !app.showMessage
    renderApp()
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleShowMessage}>{app.showMessage ? 'Hide' : 'Show'} Details</button>
            {app.showMessage && <p>{app.message}</p>}
        </div>
    )
    const appRoot = document.getElementById('app')
    ReactDOM.render(template,appRoot)
}

renderApp()