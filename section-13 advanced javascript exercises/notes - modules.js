//examples from https://www.w3schools.com/js/js_modules.asp


//Named Exports
//person.js
export const name = "Jesse";
export const age = 40;


//Grouped Name Exports
//person.js
const name = "Jesse";
const age = 40;

export {name, age};


//Default Exports
//message.js
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;


//Import from named exports
import { name, age } from "./person.js";


//Import from default exports
import message from "./message.js";




// Note
// Modules only work with the HTTP(s) protocol.
// A web-page opened via the file:// protocol cannot use import / export.
