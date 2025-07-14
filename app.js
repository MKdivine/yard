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

function infixToPostfix(tokens) {
    const outputQueue = [];
    const operatorStack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            outputQueue.push(token); // Wenn Zahl, direkt in die Output-Queue
        } else if ("+-*/^".includes(token)) {
            // Wenn Operator:
            // Solange der letzte Operator im Stack gleich oder höher ist,
            // -> den Stack-Operator in die Output-Queue verschieben
            // Dann den neuen Operator auf den Stack legen
            if (getPrecedence(token) === 1) {
             
            }
            
            else if (getPrecedence(token) === 2) {
            }
            else if (getPrecedence(token) === 3) {
            }
        }
    }

    // Alle restlichen Operatoren vom Stack in die Output-Queue
    return outputQueue;
}


function evaluatePostfix(postfixTokens) {
    const stack = [];

    for (let token of postfixTokens) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            // Zwei Werte vom Stack holen (b zuerst, dann a)
            // Rechnen je nach Operator
            // Ergebnis zurück auf Stack
        }
    }

    return stack[0]; // Das ist dein Ergebnis
}
