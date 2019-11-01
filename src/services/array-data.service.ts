import {Injectable} from "@angular/core";
import 'zone.js'

export type ITextData = {
    id: number,
    text: string,
    date: Date
}

@Injectable()

export class ArrayDataService {
    public array: ITextData[] = [];
    public id: number = 0;

    addItem(text: string) {
        if (text !== '' && text !== undefined) {
            this.array.push({
                id: this.id++,
                text: text,
                date: new Date()
            });
        }
    }

    deleteItem(index: number) {
        this.array.splice(index, 1);
    }
}
