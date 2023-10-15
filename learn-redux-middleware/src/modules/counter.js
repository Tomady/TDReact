import {createAction, handleActions} from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const increase = createAction(INCREASE);
const decrease = createAction(DECREASE);

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1,
    },
    initialState
)

export {increase, decrease};
export default counter;