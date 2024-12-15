
function calculateReadTime(text) {
    const amountOfWords = text.split(' ');
    const totalAmountOfWords = amountOfWords.length;

    const readTime = Math.round(totalAmountOfWords / 100 * 0.3);

    return readTime;
}

export default calculateReadTime;