var results = document.getElementById("resbar");
let operator;
let val1;
let val2;
let condition = true;
let result;

function EqualButton(operator, arg1, arg2) {
    switch(operator) {
        case '/':
            if (arg2 == 0) {
                result = 'Error: ZeroDivisionError';
            } else {
                result = +arg1 / +arg2;
            }
            break;
        case '+':
            result = +arg1 + +arg2;
            break;
        case '*':
            result = +arg1 * +arg2;
            break;
        case '-':
            result = +arg1 - +arg2;
            break;
    }
    console.log(result)
    return result;
}

function CalcFunc(arg) {
    console.log(arg);
    if (typeof result !== 'undefined') {
        result = undefined;
        results.innerHTML = '';
    }
    if (Number.isInteger(arg)) {
        results.innerHTML += arg;
    } else if (arg == '.') {
        results.innerHTML += arg;
    } else {
        switch(arg) {
            case '/' :
                val1 = results.innerHTML;
                results.innerHTML = '';
                operator = arg;
                break;
            case '+':
                val1 = results.innerHTML;
                results.innerHTML = '';
                operator = arg;
                break;
            case '*':
                val1 = results.innerHTML;
                results.innerHTML = '';
                operator = arg;
                break;
            case '-':
                val1 = results.innerHTML;
                results.innerHTML = '';
                operator = arg;
                break;
            case 'C':
                results.innerHTML = ''
                val1 = 0;
                val2 = 0;
                break;
            case '=':
                if (typeof val1 !== 'undefined') {
                    val2 = results.innerHTML;
                }
                console.log(val1);
                console.log(val2);
                console.log(operator);
                results.innerHTML = EqualButton(operator, val1, val2);
        }
    }
    
}