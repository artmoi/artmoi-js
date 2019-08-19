import { ConnectionConfiguration } from "./ApiConfiguration";
export interface ConfiguredConnections {
}
export declare type ConnectionConfigurations = {
    [name: string]: ConnectionConfiguration<any>;
};
export declare class ApiConnections {
    private configuredConnections;
}
