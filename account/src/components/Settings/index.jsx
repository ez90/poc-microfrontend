import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../mainRedux/actions';

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  return (
    <button onClick={() => dispatch(setUserName(user?.name ? '' : 'John Doe'))}>
      {user?.name ? 'Log out' : 'Log in'}
    </button>
  );
};

export default Settings;
