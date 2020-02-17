import { dom } from "./dom.js";

// This function is to initialize the application
function init() {
    console.log('before dom.init');
    // init data
    dom.init();
    // loads the boards to the screen
    console.log('before dom.loadBoards');
    dom.loadBoards();

}

console.log('in main js');

init();
