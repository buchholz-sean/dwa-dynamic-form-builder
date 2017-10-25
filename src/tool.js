exports.genForm = (inputs) => {
  // Create a blank string to start with
  let formStr = '';
  try {
    inputs.forEach((input) => {
      // Make sure input has property `type`
      if (input.type) {
        // Switch expression handles accepted input `type` props.
        // toLowerCase makes sure we don't have to handle case sensitivity
        switch (input.type.toLowerCase()) {
          // Ternary expressions in the middle of each case add context if user provides optional `id` or `for` properties
          case 'text':
          case 'password':
          case 'email':
            formStr += `<input type="${input.type}"` +
              (input.id ? ` id="${input.id}"` : ``) +
              (input.class ? ` class="${input.class}"` : ``) +
              (input.name ? ` name="${input.name}"` : ``) +
              (input.form ? ` form="${input.form}"` : ``) +
              (input.value ? ` value="${input.value}"` : ``) +
              (input.required ? ` required` : ``) +
              ` />`;
            break;
          case 'label':
            formStr += `<label` +
            (input.id ? ` id="${input.id}"` : ``) +
            (input.class ? ` class="${input.class}"` : ``) +
            (input.for ? ` for="${input.for}"` : ``) +
            (input.form ? ` form="${input.form}"` : ``) +
            `></label>`;
            break;
          case 'select':
            formStr += `<select` +
            (input.id ? ` id="${input.id}"` : ``) +
            (input.class ? ` class="${input.class}"` : ``) +
            (input.name ? ` name="${input.name}"` : ``) +
            (input.form ? ` form="${input.form}"` : ``) +
            (input.required ? ` required` : ``) +
            `></select>`;
            break;
          case 'reset':
            formStr += `<input type="reset"` +
              (input.id ? ` id="${input.id}"` : ``) +
              (input.class ? ` class="${input.class}"` : ``) +
              (input.name ? ` name="${input.name}"` : ``) +
              (input.form ? ` form="${input.form}"` : ``) +
              (input.value ? ` value="${input.value}"` : ``) +
              ` />`;
            break;
          case 'submit':
            formStr += `<input type="submit"` +
              (input.id ? ` id="${input.id}"` : ``) +
              (input.class ? ` class="${input.class}"` : ``) +
              (input.name ? ` name="${input.name}"` : ``) +
              (input.form ? ` form="${input.form}"` : ``) +
              (input.formaction ? ` formaction="${input.formaction}"` : ``) +
              (input.value ? ` value="${input.value}"` : ``) +
              ` />`;
            break;
          default:
          // If input doesn't match a supported value for `type`, we don't add anything to formStr
            console.log(`Invalid type: ${input.type}`);
        }
      }
    })
  } catch (e) {
    console.log('Error: ' + e);
  };
  // Send back the completed output string
  return formStr;
}
