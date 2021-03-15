const initState = {
    fetching: false,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case "BEGIN_FETCHING":
            return { ...state, fetching: true };
        case "FINISH_FETCHING":
            return { ...state, fetching: false };
        default:
            return state;
    }
};

export default appReducer;
