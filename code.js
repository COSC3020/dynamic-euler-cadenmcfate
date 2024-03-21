function e(n) {
    let sum = 1;
    let i = 1;
    let currentFact = 1;
    while (i <= n) {
        currentFact *= i;
        sum += 1 / currentFact;
        i++;
    }
    return sum;
}