---
title: Retrieving server resources
keywords: ['api', 'server', 'resources', 'retrieve', 'get', 'list', 'server resources']
---

## Endpoint

`GET /api/client/servers/{server}/resources`

This endpoint provides access to server resources for a specific server.

## Headers

- **Accept**: `application/json`
- **Content-Type**: `application/json`
- **Authorization**: `Bearer your_api_key`

## Parameters

| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| `server`  | string | The unique identifier of the server. |


## Attributes

| Attribute          | Type    | Description                                             |
|--------------------|---------|---------------------------------------------------------|
| `current_state`    | string  | The current state of the server (`running`, `stopped`, etc.). |
| `resources`        | object  | Contains details about server resource usage.           |
| `memory_bytes`     | integer | Memory usage in bytes.                                  |
| `cpu_absolute`     | float   | CPU usage as a percentage.                              |
| `disk_bytes`       | integer | Disk usage in bytes.                                    |
| `network_tx_bytes` | integer | Total bytes transmitted over the network.               |
| `network_rx_bytes` | integer | Total bytes received over the network.                  |



## Example Request
    
```bash
curl -X GET "https://beta.fragify.net/api/client/servers/{server}/resources" \
    -H "Authorization: Bearer your_api_key" \
    -H "Content-Type: application/json"
```


## Success Response

```json
{
    "object": "server_resource",
    "attributes": {
        "current_state": "running",
        "resources": {
            "memory_bytes": 1024000000,
            "cpu_absolute": 50.5,
            "disk_bytes": 512000000,
            "network_tx_bytes": 1000000,
            "network_rx_bytes": 2000000
        }
    }
}
```
