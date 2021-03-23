import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalIsOpen } from '../../redux/actions';
import { SModal, SModalTitle, SModalButton, SModalParagraph } from './styles';

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
      <SModalTitle>New modal</SModalTitle>
      <SModalParagraph>
        This modal is displayed when the property isOpen linked to the reducer modal introduce by the app Account is true.

        This example show that we can have some reducers from the main application and some reducers from the feature application working at the same time.

      </SModalParagraph>
      <div style={{textAlign: 'center'}}>
        <SModalButton type='button' onClick={closeModal}>
          Close the modal
        </SModalButton>
      </div>
    </SModal>
  );
};

export default Modal;
