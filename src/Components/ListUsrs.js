import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // componentDidMount() {
    //     console.log(this.props.users);
    // }
    render() {


        return (
            <div>
                <table className="table table-hover table-bordered" style={{ width: '50%', margin: '0 auto'}} >
                    <thead className='thead-dark'>
                        <tr>
                            <th>id</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Family</th>
                            <th >Pic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(u =>
                            <tr key={u.id}>
                                <td> {u.id} </td>
                                <td> {u.email} </td>
                                <td> {u.first_name} </td>
                                <td> {u.last_name} </td>
                                <td> <img src={u.avatar} alt='samle pic' /> </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        );
    }
}

const mapStateToProps = storeData => ({
    users: storeData.userR.users.data
})

export default connect(mapStateToProps)(ListUsers);