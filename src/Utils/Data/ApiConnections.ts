import _ from "lodash";
import { ConnectionConfiguration, ServerRoutes } from "./ApiConfiguration";
import { ApiConnection } from "./ApiConnection";


export interface ConfiguredConnections { 
}

// export declare const artmoiApiConfiguration: {}

export type ConnectionConfigurations = { [name: string]: ConnectionConfiguration<any> };

export class ApiConnections {

    private configuredConnections: ConfiguredConnections;

    // TODO ::  REFACTOR TO SOMETHING THAT MAKES SENSE
    public constructor(
        connectionConfigurations: ConnectionConfigurations[]
    ) {
        // @ts-ignore
        this.configuredConnections = _.chain(connectionConfigurations)
            .reduce((previous, current) => {

                return _.merge(previous, current);
            })
            .mapValues((apiConfiguration) =>  new ApiConnection(apiConfiguration))
            .value();
    }

    public connection<Name extends keyof ConfiguredConnections>(name: Name): ConfiguredConnections[Name] {

        return this.configuredConnections[name];
    }
}
