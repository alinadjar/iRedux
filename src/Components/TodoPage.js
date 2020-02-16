import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FetchTodos } from '../iRedux/Actions/todo_actions';

import './CSS/TodoPage.css';
import PLUS from '../assets/images/plus.png';

import MODAL from './Modal';

class Todo extends Component {
    constructor(props) {
        super(props);

        // this.modalStyle = {
        //     position: 'fixed',
        //     top: 0,
        //     right: 0,
        //     left: 0,
        //     backgroundColor: '#7f92f387',
        //     width: '100%',
        //     height: '100%'
        // };

        this.state = {
            modalShow: false,
            modalType: '',
            formData: {
                id: '',
                title: '',
                completed: ''
            }
        }
    }




    componentDidMount() {
        this.props.FetchTodos();
    }


    showTodosList = () => (
        this.props.todos ?
            <div className='row' style={{ padding: '10px' }}>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Completed</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.slice(0, 7).map((todo, index) => (
                            <tr key={todo.id}>
                                <td>{index + 1}</td>
                                <td>{todo.title}</td>
                                <td><input type='checkbox' checked={todo.completed} /></td>
                                <td><button className='btn btn-primary' onClick={() => this.Edit(todo)}>EDIT</button></td>
                                <td><button className='btn btn-danger' onClick={() => this.Delete(todo)}>DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            : <h5>No Todos to show</h5>
    )


    Edit = (todo) => {
        //alert(`Edit TODO ${todo.id}`);
        this.setState(prev => ({
            ...prev,
            modalType: 'EDIT',
            modalShow: true,
            formData: {
                id: todo.id,
                title: todo.title,
                completed: todo.completed
            }
        }), () => {
            console.log(JSON.stringify(this.state));
        });



    }

    Delete = (todo) => {
        //alert(`Delete TODO ${todo.id}`);
        this.setState(prev => ({
            ...prev,
            modalType: 'DELETE',
            modalShow: true,
            formData: {
                id: todo.id,
                title: todo.title,
                completed: todo.completed
            }
        }), () => {
            console.log(JSON.stringify(this.state));
        });
    }



    openModal = () => {
        this.setState({
            modalShow: true,
            modalType: ''
        })
    }

    closeModal = () => {
        this.setState({ modalShow: false }, () => {
            Object.assign(this.state.formData, { id: '', title: '', completed: '' });
        })
    }


    renderModal = () => {

        if (this.state.modalShow) {
            //debugger;
            switch (this.state.modalType) {

                case 'EDIT':
                    return (
                        <MODAL show={this.state.modalShow} handleClose={this.closeModal}>
                            <div className="mymodal" style={this.modalStyle} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Title: {this.state.formData.title}</h5>
                                            <button type="button" className="close" onClick={this.closeModal}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <input type='text' className='form-control' value={this.state.formData.title} />
                                            {/* <input type='text' className='form-control' value={this.state.formData.id} /> */}
                                            <input type='checkbox' className='form-control' checked={this.state.formData.completed} />
                                            <textarea>{this.state.formData.body}</textarea>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={this.closeModal} data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={this.closeModal}>Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MODAL>
                    );

                case 'DELETE':
                    return (
                        <MODAL show={this.state.modalShow} handleClose={this.closeModal}>
                            <div>
                                <label>
                                    DELETE FORM CONFIRM
                                </label>
                                <button type="button" className="btn btn-secondary" onClick={this.closeModal} data-dismiss="modal">Close</button>
                            </div>
                        </MODAL>
                    );

                default:
                    return (
                        <MODAL show={this.state.modalShow} handleClose={this.closeModal}>
                            <div>
                                <h2>Raw Modal </h2>
                            </div>
                            <button type="button" className="btn btn-secondary" onClick={this.closeModal} data-dismiss="modal">Close</button>   
                        </MODAL>
                    );
            }


        }
        return null;
    }



    render() {

        return (
            <div className='mainContainer'>

                <div onClick={this.openModal}>
                    <img src={PLUS} alt='add btn' style={{ width: '60px', height: '60px', float: 'right' }} onClick={() => { console.log('+++++++++++') }} />
                </div>


                <h2>Top 3 Todos:</h2>
                {this.showTodosList()}




                {this.renderModal()}

                {/* <MODAL show={this.state.modalShow} handleClose={this.closeModal}>
                    <label>
                        This is the Second modal...
                    </label>
                </MODAL> */}


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



            //   GET 	/posts
            //   GET 	/posts/1
            //   GET 	/posts/1/comments
            //   GET 	/comments?postId=1
            //   GET 	/posts?userId=1
            //   POST 	/posts
            //   PUT 	/posts/1
            //   PATCH 	/posts/1
            //   DELETE 	/posts/1