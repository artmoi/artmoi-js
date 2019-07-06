import * as Yup from "yup";
import { File } from "./File";
export interface Creator {
    id: string | number;
    user_id: string | number;
    display_name: string;
    first_name: string;
    last_name: string;
    created_at: string;
    updated_at: string;
    files?: CreatorFile[];
}
export interface CreatorFile {
    file_id: string | number;
    creator_id: string | number;
    slot?: string;
    position?: number;
    created_at: string;
    updated_at: string;
    file: File;
}
export declare const creatorSchema: Yup.ObjectSchema<object>;
declare module "./Editable" {
    enum EditableType {
        Creator = "creator"
    }
}
