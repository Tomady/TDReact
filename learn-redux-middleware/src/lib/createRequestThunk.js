import { startLoading, finishLoading } from "../modules/loading";

function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입을 정의함.
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch => {
        dispatch({type}); // 시작
        dispatch(startLoading(type));

        try {
            const response = await request(params);

            dispatch({
                type: SUCCESS,
                payload: response.data
            }); // 성공
            dispatch(finishLoading(type));
        } catch(e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            }); // 에러
            dispatch(startLoading(type));
            throw e;
        }
    }
}

export default createRequestThunk;

// 사용법: createRequestThunk("GET_USERS", api.getUsers);