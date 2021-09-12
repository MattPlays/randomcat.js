const axios = require("axios").default;
/** 
 * @returns {Promise<{file: string}>} A website string ex: https://purr.objects-us-east-1.dream.io/i/HRIEd.jpg
 * @example
 * const randomcat = require("@mattplays/randomcat.js");
 * randomcat().then(({file}) => {
 * console.log(file);
 * })
 */
module.exports = async() => {
    return axios({
        method: "GET",
        url: "https://aws.random.cat/meow",
        headers: {
            "Accept": "application/json"
        }
    }).then(({data}) => {
        return {file: decodeURI(data.file)};
    }).catch((err) => {throw new Error(err)});
}
