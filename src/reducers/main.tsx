import { AnyAction } from 'redux';

interface IInitState {

}

let init: IInitState = {};


export default function (state: IInitState = init, action: AnyAction) {

    switch (action.type) {
        case '':
            return state;
        default:
            return state;
    }
}
