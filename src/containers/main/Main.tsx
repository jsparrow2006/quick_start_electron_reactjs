import React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Test from '../../components/test/Test'
import './main.scss';

interface IMainPropTypes {

}

const Main: React.FC<IMainPropTypes> = (props: IMainPropTypes) => {
    return (
        <div>
            <Test/>
        </div>
    );
}



function mapStateToProps(state: any) {
    return {
        main: state.main
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

