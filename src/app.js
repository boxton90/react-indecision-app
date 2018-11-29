console.log('App.js is loaded!')

const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hand of a computer'
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
)

const user = {
    name: 'Daniel',
    age: 28,
    location: 'Madrid'
}

const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(template,appRoot)