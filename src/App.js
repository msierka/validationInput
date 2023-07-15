import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    accept: false,
  }

  message = {
    badUsername : 'Nazwa musi mieć co najmniej 10 liter i nie może zawierać spacji',
    badEmail : 'Brak @, podaj prawidłowy email',
    badPassword: 'Zła liczba znaków, hasło musi mieć 10 znaków',
    badAccept : 'Zaznacz potwierdzenie regulaminu'

  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name] : value
  })
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    const {username,email,password,accept} = this.state 
  return (
    <div className="App">
      <form onChange={this.handleSubmit}>
        <label>
          Twoje imię: <input htmlFor="user" id='user' name="username" value={username} type='text' onChange={this.handleChange}  ></input>
          {this.message.badUsername}
        </label> 
        <label>
          Twój email: <input htmlFor="email" id='email' name={email} type='email' onChange={this.handleChange}></input>
          {this.message.badEmail}
        </label>
        <label>
          Twoje hasło: <input htmlFor="password" id='password' name={password} type='password' onChange={this.handleChange}></input>
          {this.message.badPassword}
        </label>
        <label><input htmlFor="accept" id='accept' type='checkbox' name={accept} onChange={this.handleChange}></input>Zapoznałem się z regulaminem.
        <br/>
        By się zapisać potwierdź akceptację regulaminu.
        </label>
        <button>Wyślij formularz</button>
      </form>
    </div>
  );
  }
}

export default App;
