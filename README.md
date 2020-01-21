# render-json-action

This action render json file with envrionment variables

## Example usage
```yaml
uses: loveloper44/render-json-action@v1.0.0
with:
  json: jsonFilePath
```

## Json file
You have to set env like below

- %d number
- %s string
- %b boolean

```json
{
  "profile":{
    "name": "%s ENV_NAME",
    "age": "%d ENV_NAME",
  },
  "firends":["%s ENV_FRIEND_URL"],
  "authroized":"%b ENV_AUTHORIZED"
}
```
