import * as React from 'react';
import { InfoList } from './InfoList';
import { BtnReturnHome } from '../Home/BtnReturnHome';
import { ActionDecision } from '../ActionDecision/ActionDecision';

export function DetailPage(props) {
    
    return (
        <div>
            <BtnReturnHome context={props.context} 
                           screen={props.screen} setScreen={props.setScreen} 
                           items={props.items} setItems={props.setItems}
                           itemsAD={props.itemsAD} setItemsAd={props.setItemsAD}/>
            <InfoList context={props.context} 
                      screen={props.screen} setScreen={props.setScreen} 
                      itemsDetail={props.itemsDetail} setItemsDetail={props.setItemsDetail} 
                      idItem={props.idItem} setIdItem={props.setIdItem}
                      idItemAD={props.idItemAD} setIdItemAD={props.setIdItemAD} 
                      items={props.items} setItems={props.setItems}
                      itemsAD={props.itemsAD} setItemsAd={props.setItemsAD}/>
            <ActionDecision context={props.context} 
                            itemsAD={props.itemsAD} setItemsAD={props.setItemsAD} 
                            itemsDetailAD={props.itemsDetailAD} setItemsDetailAD={props.setItemsDetailAD} 
                            idItemAD={props.idItemAD} setIdItemAD={props.setIdItemAD} 
                            setScreen={props.setScreen} 
                            idItem={props.idItem} setIdItem={props.setIdItem}/>
        </div>
    )
}