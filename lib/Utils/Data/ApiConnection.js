"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var axios_1 = __importDefault(require("axios"));
var ApiConfiguration_1 = require("./ApiConfiguration");
var qs_1 = require("qs");
var ApiConnection = (function () {
    function ApiConnection(configuration) {
        this.configuration = configuration;
        this.axios = null;
        this.axios = axios_1.default;
    }
    ApiConnection.prototype.call = function (name, routeParametersOrConfig, extraConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var route, configuration, request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = this.getRoute(name);
                        return [4, this.createAxiosRequestConfiguration(route, routeParametersOrConfig, extraConfiguration || routeParametersOrConfig)];
                    case 1:
                        configuration = _a.sent();
                        request = this.axios.request(configuration);
                        return [4, request];
                    case 2:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    ApiConnection.prototype.getUri = function (name, routeParameters) {
        var route = this.getRoute(name);
        var path = this.templatePathParameters(route, routeParameters);
        return "//" + this.configuration.axiosConfiguration.baseURL + "/" + path;
    };
    ApiConnection.prototype.setAuthorization = function (type, authorization) {
        var key = "authorizations." + type;
        if (authorization) {
            lodash_1.default.set(this.configuration, key, authorization);
        }
        else {
            lodash_1.default.unset(this.configuration, key);
        }
    };
    ApiConnection.prototype.getRoute = function (name) {
        var route = this.configuration.routes[name];
        if (route) {
            return route;
        }
        throw new Error("Route " + name + " is not defined.");
    };
    ApiConnection.prototype.createAxiosRequestConfiguration = function (route, parameters, extraConfiguration) {
        if (extraConfiguration === void 0) { extraConfiguration = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, configuration, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        url = this.templatePathParameters(route, parameters);
                        _b = (_a = lodash_1.default).merge;
                        _c = [lodash_1.default.cloneDeep(this.configuration.axiosConfiguration),
                            route.axiosConfiguration || {},
                            {
                                url: url,
                                method: route.method,
                                params: route.query,
                                data: route.data,
                            }];
                        if (!route.authorizationType) return [3, 2];
                        return [4, this.createAxiosAuthorizationConfiguration(route.authorizationType)];
                    case 1:
                        _d = _e.sent();
                        return [3, 3];
                    case 2:
                        _d = {};
                        _e.label = 3;
                    case 3:
                        configuration = _b.apply(_a, _c.concat([_d, extraConfiguration]));
                        if (configuration.method === ApiConfiguration_1.Method.GET) {
                            configuration.url = configuration.url + "?" + qs_1.stringify(configuration.params);
                            delete configuration.params;
                        }
                        return [2, configuration];
                }
            });
        });
    };
    ApiConnection.prototype.createAxiosAuthorizationConfiguration = function (authorizationType) {
        return __awaiter(this, void 0, void 0, function () {
            var typePart, configurationMethod, authorization;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typePart = lodash_1.default.chain(authorizationType)
                            .camelCase()
                            .upperFirst();
                        configurationMethod = "createAxios" + typePart + "AuthorizationConfiguration";
                        authorization = this.configuration.authorizations[authorizationType];
                        if (!this[configurationMethod]) return [3, 2];
                        return [4, this[configurationMethod](authorization)];
                    case 1: return [2, _a.sent()];
                    case 2: return [2, {}];
                }
            });
        });
    };
    ApiConnection.prototype.templatePathParameters = function (route, parameters) {
        return !!route.parameters
            ? route.parameters.reduce(function (previousPath, parameter) {
                return previousPath.replace("{" + parameter + "}", parameters[parameter]);
            }, route.path)
            : route.path;
    };
    return ApiConnection;
}());
exports.ApiConnection = ApiConnection;
//# sourceMappingURL=ApiConnection.js.map