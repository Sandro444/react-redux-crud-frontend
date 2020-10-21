import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { useField } from "./hooks/useField"
import { useNotification } from "./hooks/useNotification"

import { Menu } from "./components/Menu"
import { Input } from "./components/Input"
import { Subscriptions } from "./components/Subscriptions"
import { Notification } from "./components/Notification"

import { addUser } from "./reducers/formReducer";
import { Route, Switch } from 'react-router-dom';

function App() {

  const dispatch = useDispatch()

  const name = useField("text")
  const age = useField("number")
  const email = useField("email")

  const status = useNotification(10)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      dispatch(addUser({ name: name.value, age: age.value, email: email.value }))
      name.reset()
      age.reset()
      email.reset()
      status.setStatus("user added", "success")
    } catch (e) {
      status.setStatus(e, "failure")
    }

  }
  return (
    <div className="App">

      <Menu />
      <Switch>
        <Route path="/subscriptions">
          <Subscriptions />
        </Route>
        <Route path="/">
          <form onSubmit={handleSubmit}>
            <h4>Subscription Form</h4>
            <Input required label="name" {...name} />
            <Input required label="email" {...email} />
            <Input required label="age" {...age} min="18" max="100" />
            <button>submit</button>
          </form>
          <Notification text={status.text} type={status.type} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
