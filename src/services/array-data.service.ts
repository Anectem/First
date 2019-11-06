import {Injectable} from "@angular/core";
import 'zone.js'

/**
 * Кастомный тип даты для элементов содержащихся в массиве
 * @param {number} id - id of element
 * @param {string} text - text of element.
 * @param {Date} Date - added to array Date.
 */
export type iTextData = {
    id: number,
    text: string,
    date: Date
}

@Injectable()

export class ArrayDataService {
    public array: iTextData[] = [];
    public id: number = 0;

    /*
        Add element to an array without copy original array
    */
    addItem(text: string) {
        if (text !== '' && text !== undefined) {
            this.array.push({
                id: this.id++,
                text: text,
                date: new Date()
            });
        }
    }

    /*
      Delete element from an array without copy original array
  */
    deleteItem(index: number) {
        this.array.splice(index, 1);
    }
}
