# MMM-Chuck-Norris

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Magic Mirror Module that displays Chuck Norris Facts from the public API [Chuck Norris API](https://api.chucknorris.io/)

## Using the module

requiresVersionOfMagicMirror: "2.1.0"

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-Chuck-Norris',
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

## Configuration options

| Option           | Description
|----------------- |-----------
| `title`          | *Optional* Add a tilte if you like.
