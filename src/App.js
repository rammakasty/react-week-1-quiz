import { useSelector } from 'react-redux';

function App() {
    const data = useSelector((state) => {
        return state;
    });

    console.log('data', data);

    return <div>Redux!</div>;
}
export default App;
