class Pair<T1, T2> {
    private _v1: T1;
    private _v2: T2;

    constructor(v1: T1, v2: T2) {
        this._v1 = v1;
        this._v2 = v2;
    }

    public get1(): T1 {
        return this._v1;
    }

    public get2(): T2 {
        return this._v2;
    }

}

let p1: Pair<number, string> = new Pair(1, "Fred");
let p2: Pair<number, string> = new Pair("1", "Fred");    // Error


