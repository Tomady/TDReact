import { createAction, handleActions } from "redux-actions";
import {call, put, takeLatest} from "redux-saga/effects";
import * as api from "../lib/api";
// import createRequestThunk from "../lib/createRequestThunk";
import {startLoading, finishLoading} from "./loading";

// 액션 타입 선언
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILIRE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// thunk 함수 생성
// const getPost = createRequestThunk(GET_POST, api.getPost);
const getPost = createAction(GET_POST, id => id);
// const getUsers = createRequestThunk(GET_USERS, api.getUsers);
const getUsers = createAction(GET_USERS);

function* getPostSaga(action) {
    yield put(startLoading(GET_POST)); // 로딩 시작
    // 파라미터로 action을 받아 오면 액션의 정보를 조회할 수 있음
    try {
        // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있음
        // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수임
        const post = yield call(api.getPost, action.payload);
    } catch(e) {
        
    }
}

const initialState = {
    post: null,
    users: null,
}

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
        }),
    },
    initialState
)

export {getPost, getUsers}
export default sample;