import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalIsOpen } from '../../redux/actions';

const ShowModalButton = () => {
  const dispatch = useDispatch();

  return (
    <button type='button' onClick={() => dispatch(setModalIsOpen(true))}>
      Show modal
    </button>
  );
};

export default ShowModalButton;
