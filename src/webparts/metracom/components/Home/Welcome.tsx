import * as React from 'react';
import { useState } from 'react';
import { HomePage } from './HomePage';
import { MeetingPage } from '../Meeting/MeetingPage';
import { DetailPage } from '../Detail/DetailPage';
import { EditSuccess } from '../Success/EditSuccess';
import { FormEditMeeting } from '../Meeting/FormEditMeeting';
import { FormEditAD } from '../ActionDecision/FormEditAD';
import { Search } from '../Search/Search';

export function Welcome(props) {

    const [count, setCount] = useState(1);
  
    const [items, setItems] = useState([]);

    const [idItem, setIdItem] = useState();

    const [idItemAD, setIdItemAD] = useState();
    
    const [screen, setScreen] = useState('home');

    const [itemsDetail, setItemsDetail] = useState();
    
    const [itemsAD, setItemsAD] = useState([]);

    const [itemsDetailAD, setItemsDetailAD] = useState();

    return (
        <div>
            {screen === 'home' && <HomePage context={props.context} 
                                            items={items} setItems={setItems} 
                                            setScreen={setScreen} 
                                            count={count} setCount={setCount} 
                                            idItem={idItem} setIdItem={setIdItem} 
                                            itemsDetail={itemsDetail} setItemsDetail={setItemsDetail} 
                                            itemsAD={itemsAD} setItemsAD={setItemsAD} 
                                            idItemAD={idItemAD} setIdItemAD={setIdItemAD} 
                                            userDisplayName={props.userDisplayName}/>}
            {screen === 'search' && <Search context={props.context} items={items} setItems={setItems} 
                                            setScreen={setScreen} 
                                            idItem={idItem} setIdItem={setIdItem}  
                                            itemsDetailAD={itemsDetailAD} setItemsDetailAD={setItemsDetailAD}  
                                            idItemAD={idItemAD} setIdItemAD={setIdItemAD} 
                                            itemsAD={itemsAD} setItemsAD={setItemsAD} 
                                            itemsDetail={itemsDetail} setItemsDetail={setItemsDetail} />}
            {screen === 'meeting' && <MeetingPage context={props.context} 
                                                  items={items} setItems={setItems} 
                                                  count={count} setCount={setCount} 
                                                  setScreen={setScreen} 
                                                  idItem={idItem} setIdItem={setIdItem} 
                                                  itemsDetail={itemsDetail} setItemsDetail={setItemsDetail} 
                                                  itemsAD={itemsAD} setItemsAD={setItemsAD} 
                                                  idItemAD={idItemAD} setIdItemAD={setIdItemAD}/>}
            {screen === 'detail' && <DetailPage context={props.context} 
                                                items={items} setItems={setItems} 
                                                itemsDetailAD={itemsDetailAD} setItemsDetailAD={setItemsDetailAD} 
                                                setScreen={setScreen} 
                                                idItem={idItem} setIdItem={setIdItem} 
                                                itemsDetail={itemsDetail} setItemsDetail={setItemsDetail} 
                                                itemsAD={itemsAD} setItemsAD={setItemsAD} 
                                                idItemAD={idItemAD} setIdItemAD={setIdItemAD}/>}
            {screen === 'editsuccess' && <EditSuccess context={props.context} 
                                                      setScreen={setScreen} 
                                                      idItem={idItem} setIdItem={setIdItem} 
                                                      idItemAD={idItemAD} setIdItemAD={setIdItemAD} />}
            {screen === 'editmeeting' && <FormEditMeeting context={props.context} 
                                                          setScreen={setScreen} 
                                                          idItem={idItem} setIdItem={setIdItem} 
                                                          idItemAD={idItemAD} setIdItemAD={setIdItemAD} 
                                                          itemsDetail={itemsDetail} setItemsDetail={setItemsDetail} 
                                                          items={items} setItems={setItems} />}
            {screen === 'editAD' && <FormEditAD context={props.context} 
                                                setScreen={setScreen} 
                                                itemsDetailAD={itemsDetailAD} setItemsDetailAD={setItemsDetailAD} 
                                                itemsAD={itemsAD} setItemsAD={setItemsAD} 
                                                idItem={idItem} setIdItem={setIdItem} 
                                                idItemAD={idItemAD} setIdItemAD={setIdItemAD} 
                                                itemsDetail={itemsDetail} setItemsDetail={setItemsDetail} 
                                                items={items} setItems={setItems} />}
        </div>
    )
}