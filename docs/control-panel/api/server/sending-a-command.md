---
title: Send a console command
keywords: ['api', 'server', 'command', 'send', 'console', 'execute', 'run', 'console command']
---

# Send Command

This endpoint sends a command to the server. The server must be online to send a command to it. You will get HTTP 502 if the server is not online.

## Endpoint

`POST /api/client/servers/{server}/command`

## Headers

- **Accept**: `application/json`
- **Content-Type**: `application/json`
- **Authorization**: `Bearer your_api_key`

## Example Request

```bash
curl -X POST "https://panel.fragnet.net/api/client/servers/{server}/command"
    -H "Authorization: Bearer your_api_key"
    -H "Accept: application/json"
    -H "Content-Type: application/json"
    -d '{"command": "your_command_here"}'
```

## Fields

| Name     | Required? | Type   | Description      | Rules |
|----------|-----------|--------|------------------|-------|
| `command`| required  | string | Command to send  |       |

## Example Failed Response

### Server Offline

```json
{
    "errors": [
        {
            "code": "HttpException",
            "status": "502",
            "detail": "An error was encountered while processing this request."
        }
    ]
}
```
