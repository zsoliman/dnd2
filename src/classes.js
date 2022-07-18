// const UserObject = {
//     firstName: 'Zach',
//     lastName: 'Soliman',
//     signup: function () {
//         console.log(this.firstName, 'signed up!')
//     }
// }


// // classes are data structures that allow us to create blueprints for future objects

// class User {
//     // constructor tells JS what any given instance of User consists of
//     // constructor() is called automatically anytime you say "new" in JS
//     constructor(name, email, password) {
//         this.name = name
//         this.email = email
//         this.password = password
//     }

//     signup() {
//         console.log(this.name, 'signed up!')
//     }
// }

// // 
// class AdminUser extends User {
//     constructor(name, email, password) {
//         // super takes the constructor and attaches any functions to this object
//         super(name, email, password)
//         this.admin = true
//     }
// }

// // this.  = an instance of User
// // a user is a data structure that has these attributes: name, email, password

// let user = new User('Zach', 'zachsoliman1@gmail.com', '12345678')

// console.log(user)




import React from 'react'

class App extends React.Component {
    constructor(props) {
        this.state = {
            count: 0
        }
        super(props)
    }

    render() {
        // what runs whenever the page loads
        <div className="App">
            <h1>Hello React Class</h1>
            <h2>Count is {this.state.count}</h2>
            <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>CLICK ME</button>

        </div >
    }
}
export default App;
