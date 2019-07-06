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
var Dimensions_1 = require("./Dimensions");
var Medium_1 = require("./Medium");
exports.creationSchema = Yup.object({
    "id": Yup.mixed().notRequired(),
    "title": Yup.string().required(),
    "date": Yup.date(),
    "notes": Yup.string(),
    "creators": Yup.array().of(Yup.mixed()),
    "dimensions": Dimensions_1.dimensionsSchema,
    "medium": Medium_1.mediumSchema,
});
//# sourceMappingURL=Creation.js.map