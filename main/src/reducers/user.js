const initialState = {
    name: null,
};

const userReducer = (state = initialState, { type, ...payload }) => {
    switch (type) {
        case 'SET_NAME':
            return {
                ...state,
                name: payload.name,
            };
        default:
            return state;
    }
};

export default userReducer;
