import { Method } from "./Utils/Data/ApiConfiguration";
import { ApiConnection } from "./Utils/Data/ApiConnection";
declare module "./Utils/Data/ApiConnections" {
    interface ConfiguredConnections {
        "oauth": ApiConnection<typeof artmoiOauthConfiguration>;
        "api": ApiConnection<typeof artmoiApiConfiguration>;
    }
}
export declare const artmoiOauthConfiguration: {
    routes: {
        "password-grant": {
            name: string;
            method: Method;
            path: string;
            data: {
                "grant_type": string;
            };
        };
        "magic-token-grant": {
            name: string;
            method: Method;
            path: string;
            data: {
                "grant_type": string;
            };
        };
        "facebook-grant": {
            name: string;
            method: Method;
            path: string;
            data: {
                "grant_type": string;
            };
        };
        "google-grant": {
            name: string;
            method: Method;
            path: string;
            data: {
                "grant_type": string;
            };
        };
    };
};
export declare const artmoiApiConfiguration: {
    routes: {
        "geography.get": {
            name: string;
            method: Method;
            path: string;
        };
        "sign-up": {
            name: string;
            method: Method;
            path: string;
        };
        "magic-token.store": {
            name: string;
            method: Method;
            path: string;
        };
        "session.store": {
            name: string;
            method: Method;
            path: string;
        };
        "identity": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "dashboard.recent": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "billing-profile.update": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "billing-profile.remove-all-payment-sources": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "billing-profile.sync-addons-to-stripe": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "creation.filter.index": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "creation.list": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "creation.files.store": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creation.images.index": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creation.images.store": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creation.simple-import": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "collection.files.store": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creator.index": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "creator.store": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "creator.files.store": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creator.profile-images.store": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creator.profile-images.destroy": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "catalogue.index": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "catalogue.store": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "user.profile-images.store": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "user.profile-images.destroy": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "organization.update": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "organization.watermark-images.store": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "organization.watermark-images.destroy": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "file.create-multipart-upload": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "file.store-multipart-upload": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "file.download-uri": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "file.download": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
        };
        "file.index": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "file.store": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "file.update": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "file.destroy": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "files.bulk-destroy": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "file.usage": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "file.mime-types": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "creation.files.index": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "collection.files.index": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creator.files.index": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creation.files.destroy": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "collection.files.destroy": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creator.files.destroy": {
            name: string;
            method: Method;
            path: string;
            parameters: string[];
            authorizationType: string;
        };
        "creation.files.bulk-destroy": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "collection.files.bulk-destroy": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "creator.files.bulk-destroy": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "s3.create-upload": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "s3.create-multipart-upload": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "s3.store-multipart-upload": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
        "medium.index": {
            name: string;
            method: Method;
            path: string;
            authorizationType: string;
        };
    };
};
