import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FetchTodos } from '../iRedux/Actions/todo_actions';

import './CSS/TodoPage.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        this.props.FetchTodos();
    }


    showTodosList = () => (
        this.props.todos ?
            this.props.todos.map(todo => (
                <div className="form-check">
                    <li>{todo.title}</li>
                    <li>{todo.id}</li>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
            ))
            : <h5>No Todos to show</h5>
    )

    render() {
        return (
            <div className='mainContainer'>
                <h2>Top 3 Todos:</h2>
                {this.showTodosList()}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todoR.todos,
    loading: state.todoR.loading,
    error: state.todoR.error
})

// const mapDispatchToProps = {
//     FetchTodos
// }

const mapDispatchToProps = (dispatch) => ({
    FetchTodos: (data) => dispatch(FetchTodos(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);