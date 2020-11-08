const joinNames = namesObj => {

    let result;
    result = namesObj.map(value => value.toString());
    result.pop();
    
    let nameLastValue;
    nameLastValue = namesObj.pop();

    return result.join(', ') + ' & ' + nameLastValue;
};

module.exports = joinNames;
