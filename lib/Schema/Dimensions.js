"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = __importStar(require("yup"));
var Dimension;
(function (Dimension) {
    Dimension["Height"] = "height";
    Dimension["Width"] = "width";
    Dimension["Depth"] = "depth";
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var Unit;
(function (Unit) {
    Unit["Centimeters"] = "cm";
    Unit["Inches"] = "in";
})(Unit = exports.Unit || (exports.Unit = {}));
exports.dimensionsSchema = Yup.object({
    height: Yup.number(),
    width: Yup.number(),
    depth: Yup.number(),
    unit: Yup.string().oneOf(["cm", "in"]),
});
//# sourceMappingURL=Dimensions.js.map