const reachDestination = (distance, speed) => {
    let journeyTime; 
    journeyTime = Math.round((distance / speed) * 2) / 2;

    return `I should be there in ${journeyTime} hours`;
};

module.exports = reachDestination;