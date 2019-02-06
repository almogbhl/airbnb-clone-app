import {filterType, FILTER_TYPE} from '../Filitered.action';

describe('sendType', () => {
    it('has the correct type', () => {
        const action = filterType();

        expect(action.type).toEqual(FILTER_TYPE)
    })

    it('has the correct payload', () => {
        const action = filterType("superHost");

        expect(action.payload).toEqual("superHost")
    })
})


    
