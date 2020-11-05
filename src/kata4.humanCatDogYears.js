    const humanCatDogYears = number => {

        if (typeof number !== "number") {
            return "this is not a number";
        }

        if (number < 1) {
            return "please enter a valid number";
        }

        let cat;
        let dog;

        if (number === 1) {
            cat = 15;
            dog = 15;
        }

        else if (number === 2) {
            cat = 15 + 9;
            dog = 15 + 9;
        }

        else {
            cat = 15 + 9 + ((number - 2) * 4);
            dog = 15 + 9 + ((number - 2) * 5);
        }

        return [number, cat, dog];
    };

    module.exports = humanCatDogYears;


// const humanCatDogYears = number => {

//     const catYears = years => {
//         if (number === 1) {
//             catYears = 15;
//         }

//         else if (number === 2) {
//             catYears = (15 + 9);
//         }

//         else if (number > 2) {
//             catYears = (((number - 2) * 4) + 15 + 9);
//         }
//     }
//     /*  
//         > if number === 1 then catYears is 15
//         > if number === 2 then catYears is 15 + 9
//         > if number >2 then cat years is 15 + 9 + ((number - 2) * 4)
//     */

//     const dogYears = dogYearsCalc => {
//         if (number === 1) {
//             dogYears = 15;
//         }

//         else if (number === 2) {
//             dogYears = (15 + 9);
//         }

//         else if (number > 2) {
//             dogYears = (((number - 2) * 5) + 15 + 9);
//         }
//     }
//     /*  
//         > if number === 1 then dogYears is 15
//         > if number === 2 then dogYears is 15 + 9
//         > if number >2 then dogYears is 15 + 9 + ((number - 2) * 5)
//     */

//     return ([number, catYears, dogYears])
// };

// module.exports = humanCatDogYears;
