export const PLUS_ONE = "counter/PLUS_ONE"
export const MINUS_ONE = "counter/MINUS_ONE"
const inintialState = {
    number: 0,
};

const counter = (state = inintialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1
            }
            case MINUS_ONE:
                return {
                    number: state.number - 1
                }
        default:
            return state;
    }
};

export default counter;
