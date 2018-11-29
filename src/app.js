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

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.name && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(template,appRoot)