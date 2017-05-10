import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'


const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)


/*
class App extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}
*/

export default App
