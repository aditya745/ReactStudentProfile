import React from 'react'
import UserRow from './Components/UserRow'
import UserForm from './Components/UserForm'
import UserEdit from './Components/UserEdit'
import './App.css'

class App extends React.Component  {
  constructor(props){
    super(props)
    this.deleteUser = this.deleteUser.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
    this.addUser = this.addUser.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.state ={
      user: {
        name: '',
        email: '',
        phone: '',
      },
      editValue: {
        name: '',
        email: '',
        phone: '',
      },
      users: [
        {
          "name": "Aditya Rana",
          "email": "aditya.rana@gmail.com",
          "phone": "0883424234"
        },
        {
          "name": "Amit kumar",
          "email": "amit.kumar@gmail.com",
          "phone": "0882196345"

        },
        {
        "name": "sajib",
        "email": "sajib23@gmail.com",
        "phone": "07845239845"
        },
        {
        "name": "max",
        "email": "maxpassion@gmail.com",
        "phone": "07834342653"
        },
        {
        "name": "bucky",
        "email": "buckyrules@gmail.com",
        "phone": "08348768933"
        },
        {
        "name": "martin",
        "email": "martinrocks@yahoo.com",
        "phone": "03489754983"
        },
        {
        "name": "hussey",
        "email": "hussey5454@gmail.com",
        "phone": "0833824234"
        },
        {
          "name": "guptil",
          "email": "guptil@gmail.com",
          "phone": "0883434634"
        },
        {
          "name": "john",
          "email": "john@gmail.com",
          "phone": "0883322234"
        },
        {
          "name": "amir",
          "email": "amir@gmail.com",
          "phone": "0882425734"
        },
        {
          "name": "salman",
          "email": "salman@gmail.com",
          "phone": "0843424534"
        },
        {
          "name": "david",
          "email": "david@gmail.com",
          "phone": "0383224234"
        },
        {
          "name": "rohit",
          "email": "rohit@gmail.com",
          "phone": "0843224234"
        },
        {
          "name": "sharma",
          "email": "sharma@gmail.com",
          "phone": "0483424234"
        },
        {
          "name": "dhawan",
          "email": "dhawan@gmail.com",
          "phone": "0833424234"
        },
        {
          "name": "kohli",
          "email": "virat@gmail.com",
          "phone": "0863427234"
        },
        {
          "name": "virat",
          "email": "kohli@gmail.com",
          "phone": "0383424534"
        },
        {
          "name":  "dhoni",
          "email": "dhoni@gmail.com",
          "phone": "0884524234"
        },
        {
          "name": "jadeja",
          "email": "jaddu@gmail.com",
          "phone": "0882624234"
        },
        {
          "name": "raina",
          "email": "suresh@gmail.com",
          "phone": "0883234234"
        },
      ],
      activeUser: 100,
    }

  }

  updateUser(e) {
    const userId = e.target.getAttribute('data-user')
    let users = this.state.users
    users[userId].name = this.state.editValue.name
    users[userId].email = this.state.editValue.email
    users[userId].phone = this.state.editValue.phone
    this.setState({
        users: users,
        editValue: {name: '', email: '', phone: ''},
        activeUser: 100,
    })

  }

  deleteUser(e) {
    let users = this.state.users
    const userId = e.target.getAttribute('data-id')
    users.splice(userId, 1)
    this.setState({ users: users })
  }

  toggleForm(e) {
    let user
    let userId
    if(e.target.getAttribute('data-user')) {
       userId = e.target.getAttribute('data-user')
       user = this.state.users[userId]
    } else {
        userId = 100
        user = {name: '', email: '', phone: ''}
    }

    this.setState({
        activeUser: userId,
        editValue: user
    })

  }

  onValueChange(e) {
    let user
    if(e.target.getAttribute('data-edit') === 'true') {
      user = this.state.editValue
    } else {
      user = this.state.user
    }

    user[e.target.name] = e.target.value
    if(e.target.getAttribute('data-edit') === 'true') {
        this.setState({ editValue: user })
    } else {
        this.setState({ user: user })
    }
  }

  addUser() {
    let users = this.state.users
    const user = this.state.user
    if(user.name === '' || user.email === '' || user.phone === '') {
      alert('empty fields not allowed')
      return false
    }
    else {
      users.unshift(this.state.user)
      this.setState({ users: users })
      this.setState({user: {name: '', email: '', phone: ''}})
    }

  }

  render() {
    const users = this.state.users
    return(
    <div>
      <h2 className="inverse">Nord Software</h2>
      <div className="container content-section">
          <h3>List of participants</h3>
        <UserForm
          user={this.state.user}
          addUser={this.addUser}
          onValueChange={this.onValueChange}
        />
      <section className="user-section">
      <div className="row header-row">
        <div className="col-xs-4 col-sm-3">
          Name
        </div>
        <div className="col-xs-4 col-sm-3">
         Email
        </div>
        <div className="col-xs-4 col-sm-3">
         Phone
        </div>
      </div>
        <div className="users-content">
          {
            Object.keys(users).map(key => (
                <div>
                    {this.state.activeUser !== key &&
                      <UserRow
                          key={key}
                          userId={key}
                          name={users[key].name}
                          email={users[key].email}
                          phone={users[key].phone}
                          deleteUser={this.deleteUser}
                          toggleForm={this.toggleForm}
                      />
                    }
                    {this.state.activeUser === key &&
                      <UserEdit
                          user={this.state.editValue}
                          updateUser={this.updateUser}
                          updateValue={this.onValueChange}
                          userId={key}
                          toggleForm={this.toggleForm}
                      />
                    }
                    <hr />
                </div>
            ))
          }
        </div>
      </section>
      </div>
      </div>
    )
  }
}



export default App
