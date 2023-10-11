import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";

// constants
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// actions
const changeInput = createAction(CHANGE_INPUT, (input) => (input));
let id = 3; // insert가 호출될 때마다 1씩 더해짐.
const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));
const toggle = createAction(TOGGLE, (id) => (id));
const remove = createAction(REMOVE, (id) => (id));

// reducers
const initialState = {
    input: "",
    todos: [
        {
            id: 1,
            text: "리덕스 기초 배우기",
            done: true
        },
        {
            id: 2,
            text: "리액트와 리덕스 사용하기",
            done: false
        }
    ]
}

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload: input}) => (
            produce(state, draft => {
                draft.input = input;
            })
        ),
        [INSERT]: (state, {payload: todo}) => (
            produce(state, draft => {
                draft.todos.push(todo);
            })
            ),
            [TOGGLE]: (state, {payload: id}) => (
                produce(state, draft => {
                    const todo = draft.todos.find((todo) => (todo.id === id));
                    todo.done = !todo.done;
                })
        ),
        [REMOVE]: (state, {payload: id}) => (
            produce(state, draft => {
                const index = draft.todos.findIndex((todo) => (todo.id === id));
                draft.todos.splice(index, 1);
            })
            )
        },
    initialState,
)

export {changeInput, insert, toggle, remove};
export default todos;
