# render-json-action

This action render json file with envrionment variables

## Example usage
```yaml
- uses: loveloper44/render-json-action@x.x.x
  id: render
  with:
    json: jsonFilePath

- name: Get the output
  run: echo "${{ steps.render.outputs.result }}"

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
