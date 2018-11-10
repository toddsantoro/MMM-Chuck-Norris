# MMM-Chuck-Norris

MMM-Chuck-Norris is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

## Description
Magic Mirror Module that displays Chuck Norris Facts from the free public API [Chuck Norris API](https://api.chucknorris.io/) that requires no API key. This project is my first module based on the [MagicMirror Template](https://github.com/roramirez/MagicMirror-Module-Template) and my project is completed.

## Installation
To install this module simply clone this repository into your modules folder and run `npm install` inside of `MMM-Chuck-Norris` once that has completed run `grunt` and then add the config to your config/config.js by entering this in the terminal `nano ~/MagicMirror/config/config.js` file in the root of MagicMirror. Then run `npm start` in the root and you will start to see Chuck Norris Facts every 20 seconds (default).

TODO: add a config variable to change the time between new facts.

## Using the module

requiresVersionOfMagicMirror: "2.1.0"

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: "MMM-Chuck-Norris",
            position: "bottom_bar",
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

![alt text](/assets/img/screenshot.png "Screen Shot for MMM-Chuck-Norris")

