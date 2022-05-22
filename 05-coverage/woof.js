//Tests should cover both the passing as well as failing scenarios

function woof(str) {
    if (typeof str !== "string") {
        throw Error("MUST be a string");
        //return null;
    }
    return str.length + "woof!";
}

module.exports = woof;
