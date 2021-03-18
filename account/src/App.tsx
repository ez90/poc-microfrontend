import React, {useState} from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import { setUserName } from '../../main/src/redux/actions';

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.user);
    const [name, setName] = useState(user?.name);

    return (
        <div style={{marginTop: '10px'}}>
            <h1>App 2</h1>
            <div>
                Change the name
            </div>

            <div>
                <input
                    style={{marginRight: '10px'}}
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <button onClick={() => dispatch(setUserName(name))}>
                    Dispatch App 2 new name
                </button>
            </div>
        </div>
    );
};

const AppWrapper = ({ store }) => (
    // TODO: add fake store  
    <Provider store={store || {}}>
        <App/>
    </Provider>
);

export default AppWrapper;
