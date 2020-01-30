# render-json-action

This action render json file with environment variables
and return rendered json file path

## Example usage

```yaml
- uses: loveloper44/render-json-action@v1.0.0
  id: render
  with:
    json: jsonFilePath

- name: Get the output
  run: echo "${{ steps.render.outputs.result }}"
```

## Json file

Create input json file

```json
{
  "app": {
    "service_id": "%s ENV_SERVICE_ID"
  },
  "db":{
    "host": "%s ENV_DB_HOST",
    "port": "%d ENV_DB_PORT",
    "user_name": "%s ENV_DB_USER_NAME",
    "user_password": "%s ENV_DB_USER_PASSWORD",
  }
}
```

You can use 4 types like below

- %d number
- %s string
- %b boolean
- %f float

Action will render json file with environment variables
and return rendered json file path

```json
{
  "app": {
    "service_id": "TestService"
  },
  "db":{
    "host": "localhost",
    "port": 3306,
    "user_name": "user",
    "user_password": "password",
  }
}
```
