import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalIsOpen } from '../../redux/actions';
import { SModal } from './styles';

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state?.modal);

  const closeModal = () => dispatch(setModalIsOpen(false));

  return (
    <SModal
      isOpen={modal?.isOpen}
      // isOpen={true}
    >
      <span>cferfergerg</span>
    </SModal>
  );
};

export default Modal;
