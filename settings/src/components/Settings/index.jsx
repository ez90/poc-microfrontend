import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../mainRedux/actions';

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  const [newName, setNewName] = React.useState(user);

  return (
    <>
      <input type="text" id="name" name="name" onChange={(e) => setNewName(e.target.value)}></input>
      <button onClick={() => dispatch(setUserName(newName))}>
        Modify
      </button>
    </>
  );
};

export default Settings;
