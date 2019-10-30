import {Injectable} from "@angular/core";

type ITextData = {
    id: number,
    text: string,
    date: Date
}

@Injectable({
    providedIn: 'root',
})
export class ArrayDataService {
    public array: ITextData[] = [];
    public id: number = 0;

    addData(text: string) {
        if (text !== '' && text !== undefined) {
            this.array = this.array.concat([{
                    id: this.id++,
                    text: text,
                    date: new Date()
                }]
            );
        }
    }

    deleteItem(index: number) {
        this.array.splice(index, 1);
    }
}
