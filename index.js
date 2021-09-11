const fetch = require("node-fetch");
/** 
 * @returns {Promise<{file: string}>} A website string ex: https://purr.objects-us-east-1.dream.io/i/HRIEd.jpg
 * @example
 * const randomcat = require("randomcat.js");
 * randomcat().then(({file}) => {
 * console.log(file);
 * })
 */
module.exports = async() => {
    return fetch("https://aws.random.cat/meow", {
        "method": "GET",
        "headers": {
            "Accept": "application/json"
        }
    }).then(data => data.json()).then((data) => {
        return {file: decodeURI(data.file)};
    }).catch((err) => {throw new Error(err)});
}