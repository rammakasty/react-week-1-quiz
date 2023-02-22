import { useDispatch, useSelector } from 'react-redux';
import { PLUS_ONE } from './redux/modules/counter';
import { MINUS_ONE } from './redux/modules/counter';

function App() {
    const counter = useSelector((state) => {
        return state.counter;
    });

    const dispatch = useDispatch();

    console.log('counter', counter);

    return (
        <div>
            현재카운트: {counter.number}
            <button
                onClick={() => {
                    //  +1을 해주는 로직을 써주면 된다.
                    dispatch({
                        type: PLUS_ONE
                    });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    //  +1을 해주는 로직을 써주면 된다.
                    dispatch({
                        type: MINUS_ONE
                    });
                }}
            >
                -
            </button>
        </div>
    );
}

export default App;
