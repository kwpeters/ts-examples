

class Greeter {

    private _greeting: string;

    constructor(greeting: string) {
        this._greeting = greeting;
    }

    public greet() {
        return `Hello, ${this._greeting}`;
    }

}


let greeter: Greeter = new Greeter("world");
console.log(greeter.greet);
