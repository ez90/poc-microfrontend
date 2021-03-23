import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'styled-react-modal';
import { setModalIsOpen } from '../../redux/actions';

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state?.modal);

  const closeModal = () => dispatch(setModalIsOpen(false));

  return (
    <ReactModal
      isOpen={modal?.isOpen}
      // isOpen={true}
    >
      <span>cferfergerg</span>
    </ReactModal>
  );
};

export default Modal;
