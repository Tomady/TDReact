import {createAction, handleActions} from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

const startLoading = createAction(
    START_LOADING,
    requestType => requestType
)

const finishLoading = createAction(
    FINISH_LOADING,
    requestType => requestType
)

const initialState = {};

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    },
    initialState
)

export {startLoading, finishLoading};
export default loading;