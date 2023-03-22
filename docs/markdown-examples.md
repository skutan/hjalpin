# Vefþjónustur
[API skjölun](https://skutantest.samgongustofa.is/api/v1/)
> 'https://skutantest.samgongustofa.is/api/v1/ship-types'

[SWAGGER](https://test-api.samgongustofa.is/nationalregistry/swagger/index.html)
> 'https://test-api.samgongustofa.is/nationalregistry/swagger/index.html'


:::: code-group
::: code-group-item Body
```js{1-2,5-13,16-24}
GET /api/login HTTP/1.1
Host: {{baseUrl}}
[
  {
    "id": 231,
    "code": "116",
    "name": "A - FARÞEGASKIP",
    "enName": "PASSENGER SHIP",
    "recreationalShip": false,
    "fishingShip": false,
    "otherShip": false,
    "transportShip": false,
    "passengerShip": false
  },
  {
    "id": 154,
    "code": "115",
    "name": "A - Flutningaskip",
    "enName": "CARGO SHIP",
    "recreationalShip": false,
    "fishingShip": false,
    "otherShip": false,
    "transportShip": false,
    "passengerShip": false
  }
]
```
:::
::: code-group-item Header
```json
Date: Mon, 14 Mar 2022 15:59:04 GMT
Content-Type: application/json
Content-Length: 9217
```
:::
::::

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
