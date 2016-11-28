# Website

## Developing
[The site](http://) is compiled with the [Small Victories gem](http://github.com/xxix/smallvictories-gem).

Sass is compiled from `_sv/application.scss` and compiled into the root as `application.css`. Sass partials are sourced from `_sv/_partials`.

Javascript is compiled from `_sv/application.js` and compiled into the root as `application.js`.

Third party libraries are included using [Sprockets](https://github.com/rails/sprockets).

## Getting Started
1. Install the [Small Victories gem](http://github.com/xxix/smallvictories-gem)
2. Clone the repo
3. Cd into the project folder and run `sv watch`
4. In another terminal window, cd into the folder and run `sv server`
5. Open [localhost:2345](localhost:2345) in your browser
6. Edit stylesheets and scripts in `_sv`
7. Edit HTML in the `root` folder
8. Deploy to Small Victories by copy/paste

## Sprite Generation

1. Install Glue http://glue.readthedocs.io/en/latest/installation.html#osx
2. Add retina sized (@2x) images to images/sprites
3. Run `glue images/sprite ./ --retina --scss=_sv --img=images --sprite-namespace= --namespace=sprite`
