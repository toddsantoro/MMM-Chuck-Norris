# MMM-Chuck-Norris

MMM-Chuck-Norris is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

## Description
Magic Mirror Module that displays Chuck Norris Facts from the free public API [Chuck Norris API](https://api.chucknorris.io/) that requires no API key. This project is my first module based on the [MagicMirror Template](https://github.com/roramirez/MagicMirror-Module-Template) and my project is completed.

## Installation
To install this module simply clone this repository into your modules folder and run `npm install` inside of `MMM-Chuck-Norris` once that has completed run `grunt` and then add the config to your config/config.js file in the root of MagicMirror. Then run `npm start` in the root and you will start to see Chuck Norris Facts every 20 seconds (default).

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

![alt text](https://previews.dropbox.com/p/thumb/AAL5k9oW_c0p68oB4BZK58iRodI717bL9mMwF_AgZvfoPben6lXRP1THK6oT1K_qz-6Mll0AyS5PMLwaiIWXajas3XKLyLNVtgL0xfUWHOvfWeNyNeVZgzbFyOwVvtDsAnnIz6HSqtQqo_jJJitdvcMn5aTFuwgnhg5-5NOdE8dQJU73cyQ2Ju3h44_KsVVZ8MXFM8_Wx8gCJO7zRhuLHrIaY2zF-l3Q3k8RkQfx7PGpXg/p.png?size=2048x1536&size_mode=3 "Screen Shot for MMM-Chuck-Norris")

