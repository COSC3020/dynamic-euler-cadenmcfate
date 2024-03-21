const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}
function control_e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

for (let i = 0; i < 2000; i++) {
    assert(e(i) === control_e(i));
}