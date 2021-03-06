import React, { Component } from 'react';
import { connect } from 'react-redux';


import '../Components/CSS/spinner.css';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        console.log('LOADING = '+this.props.LOADING);
    }

    render() {
        return (
            <React.Fragment>
            {
                this.props.LOADING === true ?
                    <div style={{ position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(160, 186, 207, 0.37)', width: '100%', height: '100%' }} className='spinner'>
                    </div>
                    : null
            }
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({
    LOADING: state.commonR.loading
})

export default connect(mapStateToProps)(Spinner);