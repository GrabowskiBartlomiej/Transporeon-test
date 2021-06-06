var debug_mode = true;

function logOut(out_string) {
    if (debug_mode)
        console.log("Support-o-mat: " + out_string);
}

/**
 * Returns a random integer between and including [min-max].
 */
function getRandomInt(min, max) {
    max = max + 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}