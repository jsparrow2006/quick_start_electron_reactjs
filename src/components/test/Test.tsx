import React from 'react';

interface ITestPropTypes {

}

const Test: React.FC<ITestPropTypes> = (props: ITestPropTypes) => {
    return (
        <div>
            <h1>HELLO REACT-REDUX!!</h1>
        </div>
    );
}

export default Test;
