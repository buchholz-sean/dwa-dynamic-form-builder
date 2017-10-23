exports.genForm = (inputs) => {
    // Create a blank string to start with
    var formStr = '';
    try {
        inputs.forEach((input) => {
            // Make sure input has property `type`
            if (input.type) {
                // Switch expression handles accepted input `type` props.
                // toLowerCase makes sure we don't have to handle case sensitivity
                switch (input.type.toLowerCase()) {
                    // Ternary expressions in the middle of each case add context if user provides optional `id` or `for` properties
                    case 'text':
                        formStr += '<input type="text"';
                        formStr += input.id ? ' id="' + input.id + '"' : '';
                        formStr += ' />';
                        break;
                    case 'label':
                        formStr += '<label';
                        formStr += input.id ? ' id="' + input.id + '"' : '';
                        formStr += input.for ? ' for="' + input.for+'"' : '';
                        formStr += '></label>';
                        break;
                    case 'select':
                        formStr += '<select';
                        formStr += input.id ? ' id="' + input.id + '"' : '';
                        formStr += '></select>'
                        break;
                    default:
                        // If input doesn't match a supported value for `type`, we don't add anything to formStr
                        formStr += ''
                }
            }
        })
    } catch (e) {
        console.log('Error: ' + e);
    };
    // Send back the completed output string
    return formStr;
}
