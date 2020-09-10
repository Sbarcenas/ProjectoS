import {isLocalhost} from "./utilities/isLocalhost";

export const TIMEOUT = 15000;

export const HOST_API = isLocalhost ? "localhost:3030" : "esnaqui.herokuapp.com";
export const PROTOCOL_WS = isLocalhost ? "ws" : "wss";
export const PROTOCOL_HTTP = isLocalhost ? "http" : "https";

export const HOST_S3 = "https://snaqui.s3-sa-east-1.amazonaws.com";

export const ACCESS_TOKEN = "feathers-jwt";
export const STORAGE = window.localStorage;
