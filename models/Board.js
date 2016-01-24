/**
 * Created by Alejandro on 11/1/2015.
 */
"use strict";
var District = require("./District.js");
var Capitol = require("./Capitol.js");

class Board {
    constructor(districts) {

        var mDistricts = [];
        districts.forEach(function (district) {
            var mDistrict;
            if (district.capitol)
                mDistrict = new Capitol(district.neighborhood, district.type);
            else
                mDistrict = new District(district.neighborhood, district.type);

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
        var result = {};
        if (districts instanceof Array) {
            districts.forEach(function (district) {

                if (!result[district.winner]) {
                    result[district.winner] = district.value;
                } else {
                    result[district.winner] = result[district.winner] + district.value;
                }
            });
        }
        return result;
    }


    //TODO This can be improve
    neighborhoodWinner(neighborhood) {
        var mWinner = {};
        mWinner.amount = 0;
        mWinner.winner = "";
        var resultOfNeighborhood = this.resultsOf(neighborhood);
        for (var player in resultOfNeighborhood) {
            if (resultOfNeighborhood[player] > mWinner.amount) {
                mWinner.winner = player;
                mWinner.amount = resultOfNeighborhood[player];

            }
        }

        return mWinner;
    }


}
module.exports = Board;
