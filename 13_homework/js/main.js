const testText = document.getElementById("test");
function* createIdGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


function* newFontGenerator(initValue) {
    let value = initValue;

    while (true) {
        const char = yield value;
        if (char === "up" || char === "+") {
            ++value;
        } else if (char === "down" || char === "-") {
            --value;
        }
    }
}

const currentFont = parseInt(getComputedStyle(testText).fontSize);
const fontGenerator = newFontGenerator(currentFont);

addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
        testText.style.fontSize = `${fontGenerator.next("+").value}px`;
    } else {
        testText.style.fontSize = `${fontGenerator.next("-").value}px`;
    }
})

