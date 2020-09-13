import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Test from '../../components/test/Test'
import './main.scss';


class Main extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <Test/>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        main: state.main
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

