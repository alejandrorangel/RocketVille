/**
 * Created by Alejandro on 11/2/2015.
 */
"use strict";
var District = require("./District.js");
class Capitol extends District {

    get value() {
        return 1.5;
    }

}

module.exports = Capitol;