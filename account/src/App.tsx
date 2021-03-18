import React, {useState} from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import reducer, {changeAppNameAction} from './reducer';
import {localStore} from './localStore';


const remoteAppScope = 'remoteApp';

const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state[remoteAppScope]);
    const [remoteAppInput, setRemoteAppInput] = useState('');

    return (
        <div style={{marginTop: '10px'}}>
            <h1>App 2</h1>
            <div>
                App 2 name from the redux store : {state && state.appName}
            </div>

            <div>
                <input
                    style={{marginRight: '10px'}}
                    type="text"
                    onChange={(e) => {
                        setRemoteAppInput(e.target.value);
                    }}
                />
                <button onClick={() => dispatch(changeAppNameAction(remoteAppInput))}>
                    Dispatch App 2 new name
                </button>
            </div>
        </div>
    );
};

const AppWrapper = (props) => {
    let {store} = props;

    if (store === undefined) {
        console.log('no store in props, app is in standalone mode');
        store = localStore;
    }

    useEffect(() => {
        store.injectReducer(remoteAppScope, reducer);
    }, []);

    return (
        <Provider store={store || {}}>
            <App/>
        </Provider>
    );
};

export default AppWrapper;
