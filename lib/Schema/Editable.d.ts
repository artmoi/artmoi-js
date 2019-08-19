import { File } from "./File";
export declare enum EditableType {
}
export interface Editable {
    id: string | number;
    type: EditableType;
    files: File[];
}
