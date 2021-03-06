import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalIsOpen } from '../../redux/actions';
import Settings from '../Settings';
import {
  SModal,
  SModalParagraph,
  SModalHeader,
  SModalHeaderCross,
} from './styles';

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state?.modal);

  const closeModal = () => dispatch(setModalIsOpen(false));

  return (
    <SModal
      isOpen={modal?.isOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      <SModalHeader>
        <span>User name modification</span>
        <SModalHeaderCross type='button' onClick={closeModal}>
          X
        </SModalHeaderCross>
      </SModalHeader>
      <SModalParagraph>
        This modal dispatch a value to the state of the main application.
      </SModalParagraph>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Settings />
      </div>
    </SModal>
  );
};

export default Modal;
