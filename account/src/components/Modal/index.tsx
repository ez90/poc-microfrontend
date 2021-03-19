import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../mainRedux/actions';
import { setModalState } from '../../redux/actions';
import { SModal } from './styles';

const Modal = () => {
  console.log('modalddd');
  // const dispatch = useDispatch();
  // const isModalOpen = useSelector((state) => state?.modal?.isOpen);
  // console.log('modal', isModalOpen);
  // const user = useSelector((state) => state?.user);
  // const [name, setName] = useState('');

  // const closeModal = () => dispatch(setModalState(true));

  console.log('eeee');
  return (
    <>
      {/* <SModal
        isOpen={true}
        // onBackgroundClick={closeModal}
        // onEscapeKeydown={closeModal}
      >
        <span>Coucou</span>
      </SModal> */}
      {/* <div>
        <input
            type="text"
            onChange={(e) => {
                setName(e.target.value);
            }}
        />
        <button onClick={() => dispatch(setUserName(name))}>
            Dispatch App 2 new name
        </button>
      </div> */}
    </>
  );
};

export default Modal;
