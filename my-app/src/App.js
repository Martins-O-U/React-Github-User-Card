import React from 'react';
import axios from 'axios';
import './App.css'

const gitHubApi = 'https://api.github.com/users/Martins-O-U';


export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  // useEffect(() => {
  //   axios.get(todosApi).then(res => setTodos(res.data));
  // }, []);
  componentDidMount() {
    axios.get(gitHubApi)
      .then(res => {
        debugger
        console.log(res.data)
        this.setState({ todos:[res.data] });
    });
    debugger
  }

  render() {
    return (
      <div className='component'>
        {
          this.state.todos.map((todo) => (
            <div key={todo.id}>
              {todo.login}
            </div>
          ))
        }
      </div>
    );
  }
}
