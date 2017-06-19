enum Color {
    yellow,
    white
}


interface ILabeled {
    label: string;
    color?: Color;           // optional parameter
    readonly created: Date;  // readonly
}


function printLabel(labeledObj: ILabeled): void {
    console.log(labeledObj.label);
}


//
// Structural subtyping!!!
//
printLabel({label: "inert", created: new Date()});
printLabel({label: "hazardous", color: Color.red, created: new Date});
