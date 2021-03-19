import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../mainRedux/actions';

const Settings = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  return (
    <>
      <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
      />
      <button onClick={() => dispatch(setUserName(name))}>
          Apply new name
      </button>
    </>
  );
};

export default Settings;
