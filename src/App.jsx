import { useSelector } from 'react-redux';

function App() {
    const counter = useSelector((state) => {
        return state.counter;
    });

    console.log('counter', counter);

    return <div>현재카운트:</div>;
}

export default App;
