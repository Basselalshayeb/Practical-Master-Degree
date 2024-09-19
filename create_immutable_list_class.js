class ImmutableList {
    constructor(items = []) {
      this._items = [...items];
    }
  
    add(item) {
      return new ImmutableList([...this._items, item]);
    }
  
    get(index) {
      if (index < 0 || index >= this._items.length) {
        throw new RangeError('Index out of bounds');
      }
      return this._items[index];
    }
  
    remove(index) {
      if (index < 0 || index >= this._items.length) {
        throw new RangeError('Index out of bounds');
      }
      return new ImmutableList([
        ...this._items.slice(0, index),
        ...this._items.slice(index + 1)
      ]);
    }
    size() {
      return this._items.length;
    }
    toArray() {
        return [...this._items];
      }
    
  }

  const list = new ImmutableList([1, 2, 3]);

const listWithItemAdded = list.add(4);

  
