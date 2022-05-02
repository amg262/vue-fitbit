import Collection from "@/models/Collection";

export default function LibraryCollection() {
    let library = Collection(LibraryItem);

    do {
        library.pop();
    } while (library.length > 0);


    return library;
}

// function LibraryItem (quantity) {
//
//     const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}
//
//     this.qty = quantity || 5;
//     this.originalQty = quantity || 5;
//
//     this._status = this._status ||STATUSES.CHECKED_IN;
//
//     this.checkIn = function () {
//         this.qty++;
//     };
//     this.checkOut = function () {
//         this._status = STATUSES.CHECKED_OUT;
//     };
//     this.isAvailable = function () {
//         return this.qty > 0;
//     };
// }
function LibraryItem() {

    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}

    this._status = STATUSES.CHECKED_IN;

    // methods
    this.checkIn = function () {
        this._status = STATUSES.CHECKED_IN;
    }

    this.checkOut = function () {
        this._status = STATUSES.CHECKED_OUT;

    }

    this.isAvailable = function () {
        return this._status === STATUSES.CHECKED_IN;
    }

    // media.remove = function(){
    //     return removeMethod(this);
    // }
    //
    // this.remove = removeMethod;
    //
    // return media;
}

// function LibraryItem (quantity) {
//
//     const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}
//
//     this.qty = quantity || 5;
//     this.originalQty = quantity || 5;
//
//     this._status = this._status ||STATUSES.CHECKED_IN;
//
//     this.checkIn = function () {
//         this.qty++;
//     };
//     this.checkOut = function () {
//         this._status = STATUSES.CHECKED_OUT;
//     };
//     this.isAvailable = function () {
//         return this.qty > 0;
//     };
// }
