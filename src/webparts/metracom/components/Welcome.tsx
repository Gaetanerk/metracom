import * as React from 'react';
import { useState } from 'react';
import { HomePage } from './HomePage';
import { DetailPage } from './DetailPage';

export function Welcome(props) {

    const [idItem, setIdItem] = useState();
    
    const [screen, setScreen] = useState('home');

    const [itemsDetail, setItemsDetail] = useState();

    return (
        <div>
            {screen === 'home' && <HomePage context={props.context} setScreen={setScreen} idItem={idItem} setIdItem={setIdItem} itemsDetail={itemsDetail} setItemsDetail={setItemsDetail}/>}
            {screen === 'detail' && <DetailPage context={props.context} setScreen={setScreen} idItem={idItem} setIdItem={setIdItem} itemsDetail={itemsDetail} setItemsDetail={setItemsDetail}/>}
        </div>
    )
}