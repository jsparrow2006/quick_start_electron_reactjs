import React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from '@components/test'
import './main.scss';

interface IMainPropTypes {

}

const Main: React.FC<IMainPropTypes> = (props: IMainPropTypes) => {
    return (
        <div>
            <Index/>
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

