/**
 * Created by Alejandro on 11/1/2015.
 */
"use strict";
class District {
    constructor(neighborhood, type) {
        this.neighborhood = neighborhood;
        this.type = type;
        this.player = null;
    }

    set winner(player) {
        this.player = player;
    }

    get winner() {
        return this.player;
    }

}

module.exports = District;