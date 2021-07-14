import {Dispatch, Action} from 'redux';

export const testAction = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: '' //  Action before request
        });

        function requestOK(response: any) {
            return {
                type: '',
                payload: response
            }
        }

        function requestERR(response: any) {
            return {
                type: '',
                payload: response
            }
        }


        fetch('http://localhost/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                    dispatch(requestERR({}));
                }

                response.json().then(function (data) {
                    dispatch(requestOK(data));
                });
            })
    }
};
