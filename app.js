// factory function return an object with preset properties given parameter arguments, as well as methods.
// new allows us to use constructor functions, which after being instantiated lets us add prototype methods.
// new lets us also use class which is even better, because you can add prototype methods without leaving the declaration (but outside the constructor, unless you want the function to be defined inside the instantiation.)
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    rgb() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
}

let red = new Color(255, 0);
console.log(red.rgb());