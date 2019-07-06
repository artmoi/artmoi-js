import * as Yup from "yup";
export declare enum Dimension {
    Height = "height",
    Width = "width",
    Depth = "depth"
}
export declare enum Unit {
    Centimeters = "cm",
    Inches = "in"
}
export interface Dimensions {
    [Dimension.Height]?: number;
    [Dimension.Width]?: number;
    [Dimension.Depth]?: number;
    unit: Unit;
}
export declare const dimensionsSchema: Yup.ObjectSchema<{
    height: number;
    width: number;
    depth: number;
    unit: string;
}>;
