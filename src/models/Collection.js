/**
 * Collection of Collectables
 * @param {Class|Function}typeOfItem
 * @returns {*[]}
 * @constructor
 */
export default function Collection(typeOfItem) {

    let arr = []

    arr.addItem = function (item, quantity) {
        if (quantity) {
            this.push(Object.assign(item, new typeOfItem(quantity), new Collectable(arr)))
        } else {
            this.push(Object.assign(item, new typeOfItem(), new Collectable(arr)))
        }
        return this;
    }


    arr.removeItem = function (item) {
        this.splice(this.indexOf(item), 1);
        return this;
    }
    return arr;
}

/**
 * An item in a collection
 * @param {Collection} collection
 * @constructor
 */
function Collectable(collection) {
    this.remove = function () {
        collection.removeItem(this);
    };

    this.duplicate = function () {
        collection.addItem(Object.assign(new this.constructor(), this));
    }
}