type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    public animate(dx: number, dy: number, easing: Easing): void {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
            // ...
        }
        else if (easing === "ease-in-out") {
            // ...
        }
    }
}

let button: UIElement = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
