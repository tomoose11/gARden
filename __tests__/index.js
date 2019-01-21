import {
  createID,
  getNumfrom65to90,
  checkUniqueID,
  filterArray,
  checkForNewSlug
} from '../utils/index';

describe('createID', () => {
  it('returns string of only letters and nums', () => {
    expect(/[^a-z\d]/gi.test(createID([{ id: '1SD3F5' }, { id: '6SD3F7' }]))).toEqual(false);
    expect(typeof createID([{ id: '1SD3F5' }, { id: '6SD3F7' }])).toBe('string');
  });
  it('returns id with length 6', () => {
    expect(createID([{ id: '1SD3F5' }, { id: '6SD3F7' }]).length).toBeLessThanOrEqual(7);
  });
  describe('getNumfrom65to90', () => {
    it('returns a number between 65 and 90', () => {
      expect(getNumfrom65to90()).toBeLessThanOrEqual(90);
      expect(getNumfrom65to90()).toBeGreaterThan(64);
    });
  });
  describe('checkIDUniqueness', () => {
    it('returns true if array does not contain id already', () => {
      expect(checkUniqueID([{ id: 'a' }, { id: 'b' }, { id: 'c' }], 'd')).toEqual(true);
    });
    it('returns false if array does contain id already', () => {
      expect(checkUniqueID([{ id: 'a' }, { id: 'b' }, { id: 'c' }], 'b')).toEqual(false);
    });
  });
});

describe('filterArray', () => {
  it('returns array with length one less than input array', () => {
    expect(
      filterArray(
        [
          { name: 'rose', id: 'test34' },
          { name: 'rose', id: 'test12' },
          { name: 'rose', id: 'test35' }
        ],
        'test12'
      )
    ).toHaveLength(2);
  });

  it('returns array with no objects with specified id', () => {
    expect(
      filterArray(
        [
          { name: 'rose', id: 'test34' },
          { name: 'rose', id: 'test12' },
          { name: 'rose', id: 'test35' }
        ],
        'test12'
      )
    ).toEqual([{ name: 'rose', id: 'test34' }, { name: 'rose', id: 'test35' }]);
  });
});

describe('checkForNewSlug', () => {
  it('returns false if there is no new slug ', () => {
    expect(checkForNewSlug(['lavender'], ['lavender'])).toEqual({
      bool: false,
      slugName: null
    });
  });
  it('returns true if there is a new slug ', () => {
    expect(checkForNewSlug(['lavender'], ['lavender', 'rose'])).toEqual({
      bool: true,
      slugName: 'rose'
    });
  });
});
