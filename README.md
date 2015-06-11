# asset-bazaar
hevnly's assets for public facing sites

## Installation

We build the assets using Grunt.

    npm install -g grunt-cli
(you need to have npm and node installed -> http://gruntjs.com/getting-started)

and then in the asset-bazaar folder install dependencies by typing

    npm install

## Generate CSS

To compile the less files and post-process (prefix and minify) the CSS run

    grunt

or

    grunt watch

the CSS files will be generated in the css folder.

## Use CSS

#### Development

To use the generated CSS just load the following files:

    css/hevnly.css
    css/website.css

#### Production

Load the files from the AWS bucket:

    https://s3-eu-west-1.amazonaws.com/assets.hevnly.com/v*.*/hevnly.css
    https://s3-eu-west-1.amazonaws.com/assets.hevnly.com/v*.*/website.css

Change v*.* with the version number you'd like to use

## Collaborate

Commit your changes and push to the repository, Travis CI will generate the CSS to check no errors are encountered.

## Release a new version

To release a new version and make it available on the s3 bucket just create a version tag and push it to the repo:

    git tag -a v*.* -m "Version description"
    git push origin v*.*
