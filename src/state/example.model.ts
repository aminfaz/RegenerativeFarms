export class ExampleState {
    constructor(
        public items: Items
    ) {}
}

export class Items {
    public items: Item[] = [];
}

export interface Item {
    id: number;
    title: string;
    description: string;
    shortDescription?: string;
}