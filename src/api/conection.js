import io from "socket.io-client";
import feathers from "@feathersjs/feathers";
import socketIo from "@feathersjs/socketio-client";
import authentication from "@feathersjs/authentication-client";
import {ACCESS_TOKEN, HOST_API, PROTOCOL_WS, STORAGE, TIMEOUT} from "../enviroment";

const socket = io(`${PROTOCOL_WS}://${HOST_API}`, {transports: ["websocket"]});

const client = feathers();

client.configure(socketIo(socket));
client.configure(
	authentication({
		path: "/authentication",
		entity: "user",
		service: "users",
		timeout: TIMEOUT,
		cookie: ACCESS_TOKEN,
		storageKey: ACCESS_TOKEN,
		storage: STORAGE,
	})
);

export const sock = socket;
export const Client = client;
