const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function generateBlocks() {
    const squareSize = 50;
    const widthHeight = 5;
    const squares = document.querySelector('.squares');
    squares.style.width = `${widthHeight * squareSize}px`;
    squares.style.display = 'flex';
    squares.style.flexWrap = 'wrap';

    squares.innerHTML = "";
    for (let i = 0; i < widthHeight * widthHeight; i++) {
        const squere = document.createElement("div");
        squere.style.height = `${squareSize}px`;
        squere.style.width = `${squareSize}px`;
        squere.style.backgroundColor = randomColor();
        squares.append(squere);
    }
}

function generateBlocksInterval() {
    setInterval(generateBlocks,1000);
}
generateBlocks();
generateBlocksInterval();

