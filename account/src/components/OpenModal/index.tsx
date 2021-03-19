import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setModalState } from '../../redux/actions';

const OpenModal = () => {
    const dispatch = useDispatch();

    const setModalTrue = () => {
        console.log('setmodaltrue');
        dispatch(setModalState(true));
    }

    return (
        <button
            onClick={setModalTrue}
            type="button"
        >
            Open modal
        </button>
    );
};

export default OpenModal;