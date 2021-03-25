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
        <span>Modal connection</span>
        <SModalHeaderCross type='button' onClick={closeModal}>
          X
        </SModalHeaderCross>
      </SModalHeader>
      <SModalParagraph>
        This modal connection dispatch a value to the reducer "user" instantiate
        by the main application
      </SModalParagraph>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Settings />
      </div>
    </SModal>
  );
};

export default Modal;
