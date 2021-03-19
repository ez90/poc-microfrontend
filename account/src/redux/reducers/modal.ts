const initialState = {
    isOpen: false,
};

const modalReducer = (state = initialState, { type, ...payload }) => {
    console.log('dedeffefde')
    switch (type) {
        case 'SET_MODAL_STATE':
            return {
                ...state,
                isOpen: payload.isOpen,
            };
        default:
            return state;
    }
};

export default modalReducer;
