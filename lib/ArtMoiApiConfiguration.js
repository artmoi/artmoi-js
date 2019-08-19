"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiConfiguration_1 = require("./Utils/Data/ApiConfiguration");
exports.artmoiOauthConfiguration = {
    routes: {
        "password-grant": {
            name: "password-grant",
            method: ApiConfiguration_1.Method.POST,
            path: "token",
            data: {
                "grant_type": "password",
            },
        },
        "magic-token-grant": {
            name: "magic-token-grant",
            method: ApiConfiguration_1.Method.POST,
            path: "token",
            data: {
                "grant_type": "magic-token",
            },
        },
        "facebook-grant": {
            name: "facebook-grant",
            method: ApiConfiguration_1.Method.POST,
            path: "token",
            data: {
                "grant_type": "facebook",
            },
        },
        "google-grant": {
            name: "google-grant",
            method: ApiConfiguration_1.Method.POST,
            path: "token",
            data: {
                "grant_type": "google",
            },
        },
    },
};
exports.artmoiApiConfiguration = {
    routes: {
        "geography.get": {
            name: "geography.get",
            method: ApiConfiguration_1.Method.GET,
            path: "geography",
        },
        "sign-up": {
            name: "sign-up",
            method: ApiConfiguration_1.Method.POST,
            path: "user",
        },
        "magic-token.store": {
            name: "magic-token.store",
            method: ApiConfiguration_1.Method.POST,
            path: "magic-token",
        },
        "session.store": {
            name: "session.store",
            method: ApiConfiguration_1.Method.POST,
            path: "login",
        },
        "identity": {
            name: "identity",
            method: ApiConfiguration_1.Method.GET,
            path: "identity",
            authorizationType: "oauth2",
        },
        "dashboard.recent": {
            name: "dashboard.recent",
            method: ApiConfiguration_1.Method.GET,
            path: "dashboard/recent",
            authorizationType: "oauth2",
        },
        "billing-profile.update": {
            name: "billing-profile.update",
            method: ApiConfiguration_1.Method.PUT,
            path: "billing-profile/{id}",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "billing-profile.remove-all-payment-sources": {
            name: "billing-profile.remove-all-payment-sources",
            method: ApiConfiguration_1.Method.POST,
            path: "billing-profile/remove-all-payment-sources",
            authorizationType: "oauth2",
        },
        "billing-profile.sync-addons-to-stripe": {
            name: "billing-profile.sync-addons-to-stripe",
            method: ApiConfiguration_1.Method.POST,
            path: "billing-profile/sync-addons-to-stripe",
            authorizationType: "oauth2",
        },
        "creation.filter.index": {
            name: "creation.filter.index",
            method: ApiConfiguration_1.Method.GET,
            path: "creation/filters",
            authorizationType: "oauth2",
        },
        "creation.list": {
            name: "creation.list",
            method: ApiConfiguration_1.Method.GET,
            path: "creation",
            authorizationType: "oauth2",
        },
        "creation.files.store": {
            name: "creation.files.store",
            method: ApiConfiguration_1.Method.POST,
            path: "creation/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creation.images.index": {
            name: "creation.images.index",
            method: ApiConfiguration_1.Method.GET,
            path: "creation/{id}/images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creation.images.store": {
            name: "creation.images.store",
            method: ApiConfiguration_1.Method.PUT,
            path: "creation/{id}/images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creation.simple-import": {
            name: "creation.simple-import",
            method: ApiConfiguration_1.Method.POST,
            path: "creation/simple-import",
            authorizationType: "oauth2",
        },
        "collection.files.store": {
            name: "collection.files.store",
            method: ApiConfiguration_1.Method.POST,
            path: "collection/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creator.index": {
            name: "creator.index",
            method: ApiConfiguration_1.Method.GET,
            path: "creator",
            authorizationType: "oauth2",
        },
        "creator.store": {
            name: "creator.store",
            method: ApiConfiguration_1.Method.POST,
            path: "creator",
            authorizationType: "oauth2",
        },
        "creator.files.store": {
            name: "creator.files.store",
            method: ApiConfiguration_1.Method.POST,
            path: "creator/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creator.profile-images.store": {
            name: "creator.profile-images.store",
            method: ApiConfiguration_1.Method.PUT,
            path: "creator/{id}/profile-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creator.profile-images.destroy": {
            name: "creator.profile-images.destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "creator/{id}/profile-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "catalogue.index": {
            name: "catalogue.index",
            method: ApiConfiguration_1.Method.GET,
            path: "catalogue",
            authorizationType: "oauth2",
        },
        "catalogue.store": {
            name: "catalogue.store",
            method: ApiConfiguration_1.Method.POST,
            path: "catalogue",
            authorizationType: "oauth2",
        },
        "user.profile-images.store": {
            name: "user.profile-images.store",
            method: ApiConfiguration_1.Method.PUT,
            path: "user/{id}/profile-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "user.profile-images.destroy": {
            name: "user.profile-images.destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "user/{id}/profile-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "organization.update": {
            name: "organization.update",
            method: ApiConfiguration_1.Method.PUT,
            path: "organization/{id}",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "organization.watermark-images.store": {
            name: "organization.watermark-images.store",
            method: ApiConfiguration_1.Method.PUT,
            path: "organization/{id}/watermark-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "organization.watermark-images.destroy": {
            name: "organization.watermark-images.destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "organization/{id}/watermark-images",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "file.create-multipart-upload": {
            name: "file.create-multipart-upload",
            method: ApiConfiguration_1.Method.POST,
            path: "file/create-multipart-upload",
            authorizationType: "oauth2",
        },
        "file.store-multipart-upload": {
            name: "file.store-multipart-upload",
            method: ApiConfiguration_1.Method.POST,
            path: "file/store-multipart-upload",
            authorizationType: "oauth2",
        },
        "file.download-uri": {
            name: "file.download-uri",
            method: ApiConfiguration_1.Method.GET,
            path: "file/{id_hash}/download-uri",
            parameters: [
                "id_hash",
            ],
            authorizationType: "oauth2",
        },
        "file.download": {
            name: "file.download",
            method: ApiConfiguration_1.Method.GET,
            path: "file/{id_hash}/download",
            parameters: [
                "id_hash",
            ],
        },
        "file.index": {
            name: "file.index",
            method: ApiConfiguration_1.Method.GET,
            path: "file",
            authorizationType: "oauth2",
        },
        "file.store": {
            name: "file.store",
            method: ApiConfiguration_1.Method.POST,
            path: "file",
            authorizationType: "oauth2",
        },
        "file.update": {
            name: "file.update",
            method: ApiConfiguration_1.Method.PUT,
            path: "file/{id_hash}",
            parameters: [
                "id_hash",
            ],
            authorizationType: "oauth2",
        },
        "file.destroy": {
            name: "file.destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "file/{id_hash}",
            parameters: [
                "id_hash",
            ],
            authorizationType: "oauth2",
        },
        "files.bulk-destroy": {
            name: "files.bulk-destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "file",
            authorizationType: "oauth2",
        },
        "file.usage": {
            name: "file.usage",
            method: ApiConfiguration_1.Method.GET,
            path: "file/usage",
            authorizationType: "oauth2",
        },
        "file.mime-types": {
            name: "file.mime-types",
            method: ApiConfiguration_1.Method.GET,
            path: "file/mime-types",
            authorizationType: "oauth2",
        },
        "creation.files.index": {
            name: "creation.files.index",
            method: ApiConfiguration_1.Method.GET,
            path: "creation/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "collection.files.index": {
            name: "collection.files.index",
            method: ApiConfiguration_1.Method.GET,
            path: "collection/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creator.files.index": {
            name: "creator.files.index",
            method: ApiConfiguration_1.Method.GET,
            path: "creator/{id}/files",
            parameters: [
                "id",
            ],
            authorizationType: "oauth2",
        },
        "creation.files.destroy": {
            name: "creation.files.destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "creation/{creationId}/files/{fileId}",
            parameters: [
                "creationId",
                "fileId",
            ],
            authorizationType: "oauth2",
        },
        "collection.files.destroy": {
            name: "collection.files.destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "collection/{collectionId}/files/{fileId}",
            parameters: [
                "collectionId",
                "fileId",
            ],
            authorizationType: "oauth2",
        },
        "creator.files.destroy": {
            name: "creator.files.destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "creator/{creatorId}/files/{fileId}",
            parameters: [
                "creatorId",
                "fileId",
            ],
            authorizationType: "oauth2",
        },
        "creation.files.bulk-destroy": {
            name: "creation.files.bulk-destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "creation/files",
            authorizationType: "oauth2",
        },
        "collection.files.bulk-destroy": {
            name: "collection.files.bulk-destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "collection/files",
            authorizationType: "oauth2",
        },
        "creator.files.bulk-destroy": {
            name: "creator.files.bulk-destroy",
            method: ApiConfiguration_1.Method.DELETE,
            path: "creator/files",
            authorizationType: "oauth2",
        },
        "s3.create-upload": {
            name: "s3.create-upload",
            method: ApiConfiguration_1.Method.POST,
            path: "file/create-upload",
            authorizationType: "oauth2",
        },
        "s3.create-multipart-upload": {
            name: "s3.create-multipart-upload",
            method: ApiConfiguration_1.Method.POST,
            path: "file/create-multipart-upload",
            authorizationType: "oauth2",
        },
        "s3.store-multipart-upload": {
            name: "s3.store-multipart-upload",
            method: ApiConfiguration_1.Method.POST,
            path: "file/store-multipart-upload",
            authorizationType: "oauth2",
        },
        "medium.index": {
            name: "medium.index",
            method: ApiConfiguration_1.Method.GET,
            path: "medium",
            authorizationType: "oauth2",
        },
    },
};
//# sourceMappingURL=ArtMoiApiConfiguration.js.map