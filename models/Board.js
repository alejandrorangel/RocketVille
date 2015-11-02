/**
 * Created by Alejandro on 11/1/2015.
 */
"use strict";

var District = require("./District.js");

class Board {
    constructor(districts) {

        var mDistricts = [];
        districts.forEach(function (district) {
            var mDistrict = new District(district.neighborhood, district.type);

            mDistricts.push(mDistrict);
        });
        this.districts = mDistricts;
    }

    get neighborhoods() {
        var mNeighborhods = [];
        this.districts.forEach(function (distritct) {
            if (mNeighborhods.indexOf(distritct.neighborhood) < 0) {
                mNeighborhods.push(distritct.neighborhood);
            }
        });
        return mNeighborhods;
    }

    districtsOfNeighborhood(neighborhood) {
        var mDistritcs = [];
        this.districts.forEach(function (district) {
            if (neighborhood == district.neighborhood) {
                mDistritcs.push(district);
            }
        });
        return mDistritcs;
    }

    resultsOf(neighborhood) {
        var mDistritcs = this.districtsOfNeighborhood(neighborhood);
        return this.occurrence(mDistritcs);
    }

    occurrence(districts) {
        var result = [];
        if (districts instanceof Array) {
            districts.forEach(function (district) {

                if (!result[district.winner]) {
                    result[district.winner] = 1;
                } else {
                    result[district.winner] = result[district.winner] + 1;
                }
            });
        }
        return result;
    }

;


}
module.exports = Board;
