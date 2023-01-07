/**
 * Concatenates a list of strings, separated by spaces
 * @param classes tailwindcss/html classes to concantenate
 * @returns {*} {string} concatenated list of strings
 */
export function classNames(...classes): string {
	return classes.filter(Boolean).join(" ");
}

/**
 *  Concatenates a list of strings, with nothing in between
 * @param {*} classes tailwindcss/html classes to concantenate
 * @return {*}  {string} concatenated list of strings
 */
export function concatenate(...classes): string {
	return classes.filter(Boolean).join("");
}
