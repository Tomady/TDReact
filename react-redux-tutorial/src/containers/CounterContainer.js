import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import Counter from "../components/Counter";
import {increase, decrease} from "../modules/counter";

const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter 
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}

export default CounterContainer;


// export default connect(
//     (state) => ({
//         number: state.counter.number,
//     }),
//     {
//         increase,
//         decrease,
//     },
// )(CounterContainer);

/* 위의 코드 풀이 HOC이다.
const enhance = connect(mapStateToProps, mapDispatchToProps);
export default enhance(CounterContainer);
*/
