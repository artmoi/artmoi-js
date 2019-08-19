import * as Yup from "yup";
import { Editable } from "./Editable";
import { Creator } from "./Creator";
import { Dimensions } from "./Dimensions";
import { Medium } from "./Medium";
import { CustomField } from "./CustomField";
import { Tag } from "./Tag";
export interface CreationFilters {
    dynamic_fields: {
        "custom": CustomField[];
    };
    mediums: Medium[];
    tags: Tag[];
    locations: Location[];
}
export interface Creation extends Editable {
    id: string | number;
    title: string;
    notes: string;
    creators: Creator[];
    dimensions: Dimensions;
    medium: Medium;
}
export declare const creationSchema: Yup.ObjectSchema<{
    "id": any;
    "title": string;
    "date": Date;
    "notes": string;
    "creators": Yup.Ref[];
    "dimensions": {
        height: any;
        width: any;
        depth: any;
        unit: any;
    };
    "medium": any;
}>;
declare module "./Editable" {
    enum EditableType {
        Creation = 1
    }
}
