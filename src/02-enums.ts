
enum Color {
    red,
    green,
    blue
}


function paint(color: Color): void {
    //
    // Can convert from the enumerated value back to a string!
    //
    console.log(`Painting with color ${Color[color]}`);
}

paint(0);              // ok

paint(Color.red);
paint(Color.green);
paint(Color.blue);
