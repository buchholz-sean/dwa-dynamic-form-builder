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
                        formStr += '<input type="text"' +
                            (input.id ? ' id="' + input.id + '"' : '') +
                            (input.name ? ' name="' + input.name + '"' : '') +
                            ' />';
                        break;
                    case 'password':
                        formStr += '<input type="password"' +
                            (input.id ? ' id="' + input.id + '"' : '') +
                            (input.name ? ' name="' + input.name + '"' : '') +
                            ' />';
                        break;
                    case 'label':
                        formStr += '<label' +
                            (input.id ? ' id="' + input.id + '"' : '') +
                            (input.for ? ' for="' + input.for+'"' : '') +
                            '></label>';
                        break;
                    case 'select':
                        formStr += '<select' +
                            (input.id ? ' id="' + input.id + '"' : '') +
                            '></select>';
                        break;
                    case 'reset':
                        formStr += '<input type="reset"' +
                            (input.id ? ' id="' + input.id + '"' : '') +
                            ' />';
                        break;
                    case 'submit':
                        formStr += '<input type="submit"' +
                            (input.id ? ' id="' + input.id + '"' : '') +
                            (input.value ? ' value="' + input.value + '"' : '') +
                            ' />';
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
