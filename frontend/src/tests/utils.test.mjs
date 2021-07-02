import chai from 'chai'
import { isOddNumber, countEventNumbers } from '../utils/util.mjs';

const expect = chai.expect;

describe('function isOddNumber()', () => {
    it('should be true if 3', () => {
        const result = isOddNumber(3)
        expect(result).to.be.true;
    })
})

describe('function countEvenNumber()', () => {
    it('should equal 0 if null', () => {
        const result = countEventNumbers(null);
        expect(result).to.equal(0)
    })
})