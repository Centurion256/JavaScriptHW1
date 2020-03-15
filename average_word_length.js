//Create an average word calculator function. The function must take in text and return the number of the average word length.
function avgWordLengthCalc(sentence) {

    let words = sentence.matchAll(/\w+/g);
    let word_length_sum = 0;
    let word_count = 0;
    for (let word of words) {
        word_length_sum += word[0].length;
        word_count += 1;
    }
    return word_count != 0 ? (word_length_sum / word_count) : 0;

}

console.log(avgWordLengthCalc("q w e r t y."));
console.log(avgWordLengthCalc("The reduce method executes a reducer function."));
console.log(avgWordLengthCalc("callback is called, accumulator!"));
console.log(avgWordLengthCalc(""));