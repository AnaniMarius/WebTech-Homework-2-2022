function addTokens(input, tokens) {

    if (typeof input != 'string') {
        throw ('Invalid input'); //FIRST ERROR
    }
    else {
        if (input.length < 6) {
            throw ('Input should have at least 6 characters'); //SECOND ERROR
        }
        else {
            var size=Object.keys(tokens).length;
            if (typeof tokens[size-1]['tokenName'] != 'string') { //THIRD ERROR, VERIFIES FOR EACH TOKEN
                throw ('Invalid array format'); 
            }
        }
    }
    if (input.includes('...') == true) {
        var inputIndex = input.indexOf('...');
        var tokenIndex = 0;
        while (inputIndex != -1) {
            input = input.replace('...', '${' + String(tokens[tokenIndex]['tokenName']) + '}'); //REPLACE EACH ... WITH EACH TOKEN
            tokenIndex = tokenIndex + 1;
            inputIndex = input.indexOf('...', (inputIndex + 1));
        }
        return input;
    }
    if (input.includes('...') != true) { //CHECK IF INPUT HAS ANY ...
        return input;
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;