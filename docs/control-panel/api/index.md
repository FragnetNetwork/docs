---
title: API Documentation
keywords: ['api', 'documentation', 'fragify', 'api reference', 'api docs']
---

# API Documentation

Welcome to the API documentation for Fragify. This documentation provides some examples of how to interact with the Fragify API.

## Base URL

All API requests are made to the following base URL:

```
https://panel.fragnet.net/api/client/
```

## Authentication

Authentication is required for all API endpoints. You need to include your API key as a Bearer token in the `Authorization` header of your requests.

### Example

```bash
curl -H "Authorization: Bearer your_api_key" https://panel.fragnet.net/api/client
```

## Response Format

All responses from the API are returned in JSON format.

### Example

```json
{
    "object": "example_object",
    "attributes": {
        "example_attribute": "example_value"
    }
}
```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of a request. In addition, error responses include a message that provides more details about the error.

### Common Error Codes

- **400 Bad Request**: The request was invalid or cannot be served.
- **401 Unauthorized**: Authentication failed or user does not have permissions for the requested operation.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server.

## Rate Limiting

To ensure fair usage, we apply rate limiting to the API. If you exceed the rate limit, you will receive a `429 Too Many Requests` response.

### Example Rate Limit Response

```json
{
    "error": "Too Many Requests",
    "message": "Rate limit exceeded. Try again in 60 seconds."
}
```
