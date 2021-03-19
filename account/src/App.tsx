import React, {useState} from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import { setUserName } from '../../main/src/redux/actions';
import { setModalState } from './redux/actions';
import Modal from './components/Modal';
import createMainStore from './mainRedux/createStore';
import createStore from './redux/createStore';
import OpenModal from './components/OpenModal';
import Settings from './components/Settings';

const App = () => {
    const store = createStore();

    return (
        <>
        {/* <Provider store={store}> */}
            <h1>App 2</h1>
            <Settings />
            <OpenModal />
            <Modal />
        {/* </Provider> */}
        </>
    );
};

const AppWrapper = ({ store }) => 
{
    console.log('App wrapper', store)
    // TODO: add fake store 
    const computedStore = store ? store : createMainStore();
    console.log('aaaa')

    const mainContext = React.createContext({});

    return (
        <Provider context={mainContext} store={computedStore}>
            <Provider store={createStore()}>
            <App/>
            </Provider>
        </Provider>
    );
}

export default AppWrapper;
