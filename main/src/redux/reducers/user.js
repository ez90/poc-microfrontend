const initialState = {
    name: 'John DOE',
    isConnected: false,
};

export const userReducer = (state = initialState, { type, ...payload }) => {
    switch (type) {
        case 'SET_USER_NAME':
            return {
                ...state,
                name: payload.name,
            };
        case 'SET_USER_IS_CONNECTED':
            return {
                ...state,
                isConnected: payload.isConnected,
            };
        default:
            return state;
    }
};
