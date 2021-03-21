const initState = {
    page: 0,
    totalElements: 0,
    data: [],
};

const userReducer = (state = initState, action) => {
    const { data, page, totalElements } = action;
    switch (action.type) {
        case "FETCH_LIST_USER_SUCCESS":
            return {
                data,
                page,
                totalElements,
            };
        default:
            return state;
    }
};

export default userReducer;
