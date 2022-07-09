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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Login
 */
export interface Login {
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    username: string;
}

/**
 * Check if a given object implements the Login interface.
 */
export function instanceOfLogin(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "username" in value;

    return isInstance;
}

export function LoginFromJSON(json: any): Login {
    return LoginFromJSONTyped(json, false);
}

export function LoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): Login {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': json['password'],
        'username': json['username'],
    };
}

export function LoginToJSON(value?: Login | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
        'username': value.username,
    };
}
