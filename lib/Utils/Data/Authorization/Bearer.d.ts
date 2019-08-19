import { ConnectionConfiguration } from "../ApiConfiguration";
import { AxiosRequestConfig } from "axios";
declare module "../ApiConfiguration" {
    interface ConfiguredAuthorizations {
        "bearer": BearerAuthorization;
    }
}
declare module "../ApiConnection" {
    interface ApiConnection<Configuration extends ConnectionConfiguration<any>> {
        setAuthorization(type: "bearer", authorization?: BearerAuthorization | null): void;
        createAxiosBearerAuthorizationConfiguration(authorization: BearerAuthorization): Promise<Partial<AxiosRequestConfig>>;
    }
}
export interface BearerAuthorization {
    token: string;
}
