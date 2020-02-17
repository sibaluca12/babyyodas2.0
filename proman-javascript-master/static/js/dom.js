// It uses data_handler.js to visualize elements
import { dataHandler } from "./data_handler.js";

export let dom = {
    init: function () {
        // This function should run once, when the page is loaded.
        console.log('in dom.init');
    },
    loadBoards: function () {
        console.log('in dom.loadBoards');
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(function(boards){
            console.log('before dom.showBoards');
            dom.showBoards(boards);
        });
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        console.log('in dom.showBoards');
        console.log(boards);


        let boardList = '';

        for(let board of boards){
            boardList += `
                <section class="board">
                    <div class="board-header"><span class="board-title">${board.title}</span>
                        <button class="board-add">Add Card</button>
                        <button class="board-toggle"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div class="board-columns">
                </div>
            </section>
            `;
        }

        const outerHtml = `
            <div class="board-container">
                ${boardList}
            </div>
        `;

        let boardsContainer = document.querySelector('body');
        boardsContainer.insertAdjacentHTML("beforeend", outerHtml);



    },
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
    },
    showCards: function (cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    },
    // here comes more features
};
