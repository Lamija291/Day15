const milili = [10, 25, 4];

function myArr(mili) {
    'use strict';

    milili[0] = 4;
    milili[1] = 10;
    milili[2] = 25;

    return mili;

}
console.log(myArr(milili));
module.exports = myArr;