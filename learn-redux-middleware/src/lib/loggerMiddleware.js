const loggerMiddleware = store => next => action => {
    // middleware default structure
    console.log(action && action.type);
    console.log("이전 상태", store.getState());
    console.log("액션", action);
    next(action);
    console.log("다음 상태", store.getState());
    console.log();

}

export default loggerMiddleware;