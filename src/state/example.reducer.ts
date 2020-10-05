import { ExampleState } from './example.model';

const initialState = new ExampleState({items: [
    { id: 0, title: 'Amin\'s farm', shortDescription: 'Amin is selling this product',  description: 'Amin- Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 1, title: 'Sanaz Farm', shortDescription: 'Sanaz is selling this product', description: 'Sanaz - Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 2, title: 'Sonia Farm', shortDescription: 'Sonia is selling this product', description: 'Sonia Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
]});

export const example = (state = initialState, action: any): ExampleState => {
    switch (action.type) {
        default:
            return state
    }
};