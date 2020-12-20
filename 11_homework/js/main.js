async function getRandomChinese(length) {
    let endString = "";
    const delay = 50;

    const makeChinesChar = () => String.fromCharCode(String(Date.now()).slice(-5));

    const getRandomChar = () => new Promise((resolve) => setTimeout(() => { return resolve(makeChinesChar()) }, delay));

    while (length > 0) {
        endString += await getRandomChar();
        length--;
    }
    return endString;
}

getRandomChinese(10).then((result) => console.log(result));