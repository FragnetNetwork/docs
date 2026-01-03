---
title: Accessing the console
keywords: ['api', 'server', 'console', 'websocket', 'real-time', 'console access']
---

# WebSocket Console Details

The WebSocket endpoint provides real-time access to the console of a specific server. This allows you to receive live updates and send commands directly to the server console.

## Endpoint

`GET /api/client/servers/{server}/websocket`

## Headers

- **Accept**: `application/json`
- **Content-Type**: `application/json`
- **Authorization**: `Bearer your_api_key`

## Description

This endpoint generates credentials to establish a WebSocket connection with your Fragify server.

### Example Request

```bash
curl -X GET "https://panel.fragnet.net/api/client/servers/{server}/websocket"
    -H "Authorization: Bearer your_api_key"
    -H "Accept: application/json"
    -H "Content-Type: application/json"
```

### Example Response

```json
{
  "data": {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6Ij...",
    "socket": "wss://panel.fragnet.net:8080/api/servers/xxxxxxxxx/ws"
  }
}
```

## How to Connect

1. Make a request to the endpoint to generate the WebSocket credentials.
2. Connect to the WebSocket address provided in the response.

### Example

```javascript
const ws = new WebSocket('wss://panel.fragnet.net:8080/api/servers/xxxxxxxxx/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    event: 'auth',
    args: ['eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6Ij...']
  }));
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('Message from server:', message);
};
```

## Authentication

Send the token to the WebSocket as follows:

```json
{
    "event": "auth",
    "args": ["<token>"]
}
```

Tokens last about 10-15 minutes. The WebSocket will notify you when you need to send a new token with:

- `{"event":"token expiring"}`
- `{"event":"token expired"}`

## Actions

### Things You Can Send

- **Authenticate with WebSocket**

  ```json
  {
      "event": "auth",
      "args": ["<token>"]
  }
  ```

- **Request Stats**

  ```json
  {
      "event": "send stats",
      "args": [null]
  }
  ```

- **Request Logs**

  ```json
  {
      "event": "send logs",
      "args": [null]
  }
  ```

- **Send Power Action**

  ```json
  {
      "event": "set state",
      "args": ["<power-action>"]
  }
  ```

- **Send Command**

  ```json
  {
      "event": "send command",
      "args": ["<command>"]
  }
  ```

## Responses

### Things You'll Receive

- **Successful Authentication**

  ```json
  {
      "event": "auth success"
  }
  ```

- **Server Status Updates**

  ```json
  {
      "event": "status",
      "args": ["offline"]
  }
  ```

- **Console Output Logs**

  ```json
  {
      "event": "console output",
      "args": ["[14:07:12] [Query Listener #1/INFO]: Query running on 0.0.0.0:25565"]
  }
  ```

- **Server Stats**

  ```json
  {
      "event": "stats",
      "args": ["{"memory_bytes":526626816,"memory_limit_bytes":588800000,"cpu_absolute":588.815,"network":{"rx_bytes":1126,"tx_bytes":1126},"state":"stopping","disk_bytes":128118626}"]
  }
  ```

- **Token Expiring Notification**

  ```json
  {
      "event": "token expiring"
  }
  ```

- **Token Expired Notification**

  ```json
  {
      "event": "token expired"
  }
  ```
