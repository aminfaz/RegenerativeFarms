import React from 'react'; 
import { Item } from 'state';
import './ListItem.scss';

export interface ListItemProps {
    item: Item
};

export const listItemNoDataMessage = 'No Data';

export const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
    
    return (
        <div className="list-item__component">

            <div className="list-item__inner">

                <h1 data-test="ListItemHeading">
                    { props.item.title ? props.item.title : listItemNoDataMessage  }
                </h1>

                <h2 data-test="ListItemSubHeading">
                    { props.item.shortDescription ?  props.item.shortDescription : listItemNoDataMessage }
                </h2>

            </div>

        </div> 
    );
};

export default ListItem;