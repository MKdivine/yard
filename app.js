function getPrecedence(exp) {

    switch (exp) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
        default:
            return 0; // No precedence for non-operators
    }

}

function evaluateExpression(exp) {
    const stack = [];
    const tokens = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else if (isNaN(token)) {

        }
    }
}