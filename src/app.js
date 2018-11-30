console.log('App.js is loaded!')

const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hand of a computer',
    options: ['One','Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
)

const user = {
    name: 'Daniel',
    age: 28,
    location: 'Madrid'
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}

let count = 0

const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}

let appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateTwo,appRoot)
}

renderCounterApp()