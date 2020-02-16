
import React, { Component } from 'react';
import { FETCH_POSTS } from '../iRedux/types';
//import {FetchPosts} from '../iRedux/Actions/post_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {

        console.log('==============Now inside componentDidMount');
        this.props.dispatch({
            type: FETCH_POSTS
        });

        //this.props.Fetch_Posts();
    }

    componentWillReceiveProps() {
        console.log('==============Now inside componentWillReceiveProps');
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>userId</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            //this.props.posts.length !== 0 ?
                            // this.props.posts ?
                                this.props.posts.map((p, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{p.id}</td>
                                        <td>{p.userId}</td>
                                        <td>{p.title}</td>
                                        <td>{p.body}</td>
                                    </tr>)
                                // : null
                        }


                    </tbody>
                </table>

                <div >
                    <button className='btn btn-primary' style={{margin: '10px auto', display:'block'}}>
                        Refresh Posts
                    </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    posts: state.postR.posts
})


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ FetchPosts }, dispatch);
//   }


const mapDispatchToProps = (dispatch) => ({
    //Fetch_Posts: FetchPosts,
    //Fetch_Posts: () => dispatch( FetchPosts() ),
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);