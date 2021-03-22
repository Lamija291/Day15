function checkVariableScope() {
    'use strict';

    let i = 'function scope';

    if (true) {
        let i = 'black scope';
        console.log('Scope i is: ', i);
    }
    console.log('Scope i is:', i);
    return i;
}
checkVariableScope();
module.exports = checkVariableScope;