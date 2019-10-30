import {ArrayDataService} from "./array-data.service";

describe('ArrayDataService', () => {
    let service: ArrayDataService;
    beforeEach(() => {
        service = new ArrayDataService()
    });
    it('add method shoud add value to array', () => {
        service.addData('data array service testing');
        expect(service.array[0].text).toBe('data array service testing')
    });
    it('delete method should delete value from array', () => {
        service.addData('data array 1 service testing');
        service.addData('data array 2 service testing');
        service.addData('data array 3 service testing');
        service.deleteItem(2);
        expect(service.array.length).toBe(2)
    })
});



