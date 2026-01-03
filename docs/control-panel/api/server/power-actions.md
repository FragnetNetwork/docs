---
title: Control the power state of a server
keywords: ['api', 'server', 'power', 'control', 'power state', 'power actions']
---

# Change Power State

This endpoint sends a power signal to the server.

## Endpoint

`POST /api/client/servers/{server}/power`

## Headers

- **Accept**: `application/json`
- **Content-Type**: `application/json`
- **Authorization**: `Bearer your_api_key`

## Example Request

```bash
curl -X POST "https://panel.fragnet.net/api/client/servers/{server}/power"
    -H "Authorization: Bearer your_api_key"
    -H "Accept: application/json"
    -H "Content-Type: application/json"
    -d '{"signal": "start"}'
```

## Fields

| Name    | Required? | Type   | Description        | Rules |
|---------|-----------|--------|--------------------|-------|
| `signal`| required  | string | Power signal to send|       |

## Signals

| Signal  | Description                    |
|---------|--------------------------------|
| `start` | Starts the server              |
| `stop`  | Gracefully stops the server    |
| `restart`| Stops then starts the server  |
| `kill`  | Instantly ends the server process|
