const numberToReversedDigits = number => {
    const stringsNumber = Array.from(number.toString()).map(Number);
    stringsNumber.reverse();
    return stringsNumber;
};

module.exports = numberToReversedDigits;