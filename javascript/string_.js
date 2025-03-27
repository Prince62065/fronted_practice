console.log("Hi,Prince");
b="Hello world";
c="what you want to do?";
console.log(`${b},I am using string template and ${c}`);
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.startsWith("h"));
console.log(b.endsWith("d"));
console.log(b.slice(0,2));
console.log(b.concat(b,c));
console.log(b+" How are you?");
for (const element of b) {
    console.log(element);
}
console.log(b.indexOf("w"));
console.log(b.replace("Hello","Hi"));
console.log(b.repeat(4));
console.log(b.length);

console.log(Math.floor(Math.random() * (10- 2+ 1)) + 2);