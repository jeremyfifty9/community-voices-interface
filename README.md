# community-voices-interface
Material design for Community Voices. This is in a separate repository during initial phases of development

## Requirements
Make sure you have Node package manager installed. Npm is packaged with node. Make sure you have npm installed:

    npm -v

## Downloading
To download, clone this repository:

    git clone https://github.com/jeremyfifty9/community-voices-interface

## Installing
To install, change to the repository's root directory and run the build script:

    npm run build

This pre-processes anything configured with webpacks. This script needs to be executed whenever anything processed by webpacks is changed.

## Development
Speed up development by having npm watch your files. When you start developing, instead of `npm run build`, add a watch flag. Whenever anything webpacks is watching changes, npm will automatically run the build script:

    npm run build -- --watch
