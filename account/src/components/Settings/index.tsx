import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../mainRedux/actions';

const Settings = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  return (
    <>
      <div>Change the name</div>

      <div>
        <input
          style={{ marginRight: '10px' }}
          type='text'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={() => dispatch(setUserName(name))}>
          Dispatch App 2 new name
        </button>
      </div>
    </>
  );
};

export default Settings;
