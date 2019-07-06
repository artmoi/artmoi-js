import * as Yup from "yup";


export interface Medium {
    id: string | number;
    organization_id: string | number;
    slug: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export const mediumSchema = Yup.mixed();
