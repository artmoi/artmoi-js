import moment from "moment";
import { ApiConnection } from "../ApiConnection";
import { ConnectionConfiguration } from "../ApiConfiguration";
import { AxiosRequestConfig } from "axios";
declare module "../ApiConfiguration" {
    interface ConfiguredAuthorizations {
        "oauth2": Oauth2Authorization;
    }
}
declare module "../ApiConnection" {
    interface ApiConnection<Configuration extends ConnectionConfiguration<any>> {
        setAuthorization(type: "oauth2", authorization?: Oauth2Authorization | null): void;
        createAxiosOauth2AuthorizationConfiguration(authorization: Oauth2Authorization): Promise<Partial<AxiosRequestConfig>>;
    }
}
export declare enum Oauth2TokenType {
    Bearer = "bearer"
}
export interface Oauth2AccessToken {
    value: string;
    type: Oauth2TokenType;
    expiresIn?: number;
    expiresAt?: moment.Moment;
}
export interface Oauth2Response {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: string;
}
export interface Oauth2Authorization<ConnectionConfigurationType extends ConnectionConfiguration<any> = any> {
    accessToken: Oauth2AccessToken;
    refreshToken?: string;
    refreshConnection?: ApiConnection<ConnectionConfigurationType>;
    refreshRouteName?: keyof ConnectionConfigurationType["routes"];
}
