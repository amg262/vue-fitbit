
// eslint-disable-next-line no-unused-vars
function hi() {
    console.log('yo');
}

// eslint-disable-next-line no-unused-vars
class Help {
    v1 = '';
    v2 = '';

    constructor(v1, v2) {
        if (v1) this.v1 = v1;
        if (v2) this.v2 = v2;
        this._v1 = v1;
        this._v2 = v2;
    }

    get v1() {
        return this._v1;
    }

    set v1(value) {
        this._v1 = value;
    }

    get v2() {
        return this._v2;
    }

    set v2(value) {
        this._v2 = value;
    }
}