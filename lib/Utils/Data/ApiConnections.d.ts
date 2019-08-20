import { ConnectionConfiguration } from "./ApiConfiguration";
export interface ConfiguredConnections {
}
export declare type ConnectionConfigurations = {
    [name: string]: ConnectionConfiguration<any>;
};
export declare class ApiConnections {
    private configuredConnections;
    constructor(connectionConfigurations: ConnectionConfigurations[]);
    connection<Name extends keyof ConfiguredConnections>(name: Name): ConfiguredConnections[Name];
}
