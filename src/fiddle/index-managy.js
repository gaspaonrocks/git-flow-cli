"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexManager;
(function (IndexManager) {
    let value = 0;
    let limit = 0;
    IndexManager.getValue = () => {
        return value;
    };
    IndexManager.resetValue = () => {
        value = 0;
        return IndexManager;
    };
    IndexManager.setLimit = (number) => {
        limit = number - 1;
        return IndexManager;
    };
    IndexManager.shiftValue = () => {
        value >= limit ? value = 0 : value += 1;
        return IndexManager;
    };
    IndexManager.unshiftValue = () => {
        value <= 0 ? value = limit : value -= 1;
        return IndexManager;
    };
})(IndexManager = exports.IndexManager || (exports.IndexManager = {}));