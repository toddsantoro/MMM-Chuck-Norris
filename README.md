# MMM-Chuck-Norris

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Magic Mirror Module that displays Chuck Norris Facts from the public API https://api.chucknorris.io/

## Using the module

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
| `option1`        | *Required* DESCRIPTION HERE
| `option2`        | *Optional* DESCRIPTION HERE TOO <br><br>**Type:** `int`(milliseconds) <br>Default 60000 milliseconds (1 minute)
