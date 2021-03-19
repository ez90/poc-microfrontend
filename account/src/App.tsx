import React, {useState} from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import createStore from './mainRedux/createStore';
import { setUserName } from './mainRedux/actions';
import { modalReducer } from './redux/reducers/modal';
import { setModalIsOpen } from './redux/actions';

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.user);
    const modal = useSelector((state) => state?.modal);
    const [name, setName] = useState(user?.name);
    console.log('eeeee', setModalIsOpen(true));

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

            <span>modal: {modal?.isOpen ? 'open' : 'close'}</span>
            <button type="button" onClick={() => dispatch(setModalIsOpen(true))}>
            {/* <button type="button" onClick={() => console.log('ddddd')}> */}
                SetModal to true
            </button>
        </div>
    );
};

const AppWrapper = ({ store }) => {

    const computedStore = store || createStore({});

    computedStore.injectReducer('modal', modalReducer);

    return (
        <Provider store={computedStore}>
            <App/>
        </Provider>
    );

};

export default AppWrapper;
