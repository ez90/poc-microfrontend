const initialState = {
    isOpen: null,
};

export const modalReducer = (state = initialState, { type, ...payload }) => {
    switch (type) {
        case 'SET_MODAL_IS_OPEN':
            return {
                ...state,
                isOpen: payload.isOpen,
            };
        default:
            return state;
    }
};
