"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var ApiConnection_1 = require("./ApiConnection");
var ApiConnections = (function () {
    function ApiConnections(connectionConfigurations) {
        this.configuredConnections = lodash_1.default.chain(connectionConfigurations)
            .reduce(function (previous, current) {
            return lodash_1.default.merge(previous, current);
        })
            .mapValues(function (apiConfiguration) { return new ApiConnection_1.ApiConnection(apiConfiguration); })
            .value();
    }
    ApiConnections.prototype.connection = function (name) {
        return this.configuredConnections[name];
    };
    return ApiConnections;
}());
exports.ApiConnections = ApiConnections;
//# sourceMappingURL=ApiConnections.js.map