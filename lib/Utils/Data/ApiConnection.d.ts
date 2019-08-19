import { AxiosInstance } from "axios";
import { ConnectionConfiguration, ServerRoute } from "./ApiConfiguration";
import { AxiosRequestConfig } from "axios";
declare type ConfiguredRouteKey<Configuration extends ConnectionConfiguration<any>> = keyof Configuration["routes"];
export declare class ApiConnection<Configuration extends ConnectionConfiguration<any>> {
    private configuration;
    axios: AxiosInstance;
    constructor(configuration: Configuration);
    call<ResponseDataType = any>(name: ConfiguredRouteKey<Configuration>, extraConfiguration?: Partial<AxiosRequestConfig>): Promise<ResponseDataType>;
    call<ResponseDataType = any>(name: ConfiguredRouteKey<Configuration>, routeParameters?: any, extraConfiguration?: Partial<AxiosRequestConfig>): Promise<ResponseDataType>;
    getUri(name: ConfiguredRouteKey<Configuration>, routeParameters?: any): string;
    getRoute(name: ConfiguredRouteKey<Configuration>): ServerRoute;
    private createAxiosRequestConfiguration;
    private createAxiosAuthorizationConfiguration;
    private templatePathParameters;
}
export {};
