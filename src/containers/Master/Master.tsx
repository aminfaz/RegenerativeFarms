import React from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router-dom'; 
import { useRouteMatch, withRouter } from 'react-router-dom';
import { Header, ListItemLink } from 'components/';
import { Items, Item, getExampleItems } from 'state';
import './Master.scss';

export interface MasterProps extends Items {
}

export const Master: React.FunctionComponent<MasterProps> = (props) => {
    let { path } = useRouteMatch() as RouteProps;
    let { items } = props;
    const listItems = items.map((item: Item) =>
        <li key={item.id}>
            <ListItemLink 
                to={`${path}/detail/${item.id}`} item={item} />
        </li>
    );
    return (
        <div className="master">
            <Header title="Farms" hideBackButton={true}/>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export const MasterContainer = withRouter(
    connect(getExampleItems)(Master)
);

