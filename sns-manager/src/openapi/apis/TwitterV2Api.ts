/* tslint:disable */
/* eslint-disable */
/**
 * SNS-Manager API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorMessage,
  OAuthToken,
  UnprocessableEntity,
  User,
} from '../models';
import {
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    OAuthTokenFromJSON,
    OAuthTokenToJSON,
    UnprocessableEntityFromJSON,
    UnprocessableEntityToJSON,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface TwitterAuthGetRequest {
    returnTo?: string;
}

/**
 * 
 */
export class TwitterV2Api extends runtime.BaseAPI {

    /**
     * Callback after login to get access token
     */
    async twitterAuthCallbackCallbackGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthToken>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/twitter2/auth/callback`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthTokenFromJSON(jsonValue));
    }

    /**
     * Callback after login to get access token
     */
    async twitterAuthCallbackCallbackGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthToken> {
        const response = await this.twitterAuthCallbackCallbackGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Redirects to twitter login
     */
    async twitterAuthGetRaw(requestParameters: TwitterAuthGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.returnTo !== undefined) {
            queryParameters['return_to'] = requestParameters.returnTo;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/twitter2/auth/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Redirects to twitter login
     */
    async twitterAuthGet(requestParameters: TwitterAuthGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.twitterAuthGetRaw(requestParameters, initOverrides);
    }

    /**
     */
    async userUserGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwt", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/twitter2/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async userUserGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.userUserGetRaw(initOverrides);
        return await response.value();
    }

}