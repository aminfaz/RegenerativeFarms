import { Item, Items } from './example.model';
import { AppStore } from './store';

export const getExampleItems = (store: AppStore): Items => {
    return store.example.items;
};

export const getExampleById = (store: AppStore, ownProps: { match: { params: any }}): { item: Item | null } => {
    
    if (!ownProps.match.params || !ownProps.match.params.id)
     return {item: null}

    const _item = store.example.items.items.find(_item => _item.id.toString() === ownProps.match.params.id)
    
    if (_item)
        return {item: _item}
    
    return {item: null}
};
