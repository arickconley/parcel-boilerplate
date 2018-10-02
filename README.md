# Parcel Boilerplate

Get up and runnning with PostCSS (Sugarss sytnax), PostHTML (includes for componentizing html), and a tunnel to share with the outside world.

## Why?

Because setting up tooling sucks. Easily the worst part about modern Javascript projects. Especially when you want to use all the great new features, but don't want to spend the time to set up tools everytime. Parcel handles a lot of the headache already, but this makes getting a simple static site up and running extremely easy.

## What's included?

#### Parcel

An amazing, "zero" config bundler with a ton of functionality out of the box, including a development server with hot module replacement. Also sub 100ms build times.
Plugins used:

- parcel-plugin-clean-dist
- parcel-plugin-imagemin

#### PostCSS

All the juicy new CSS features, with JS plugins. Plugins used in this boilerplate:

- Autoprefixer
- PostCSS-nested
- Sugarss

#### PostHTML

Gives you the ability to transform HTML with JS plugins. This boilerplate includes the "posthtml-include" plugin, allowing you to use the

```html
<include src="path/to/component.html"></include>
```

tag to import HTML components.

## Getting Started

Clone/Fork this repo

```zsh
$ git clone https://github.com/arickconley/parcel-boilerplate.git project-folder
$ cd project-folder
```

Install the dependencies

```zsh
$ ## use yarn
$ yarn
$ ## use npm
$ npm i
```

PostHTML squawks about "addDependencyTo" being deprecated. To get rid of it, run the following in your console:

```zsh
$ ## use yarn
$ yarn fix
$ ## use npm
$ npm run fix
```

This basically just deletes lines 20-24 from the postHTML file. This is the easiest solution I could figure out.

## Commands

### Start

```zsh
$ yarn start
```

Runs parcel on "src/index.html" and starts a development server at [localhost:1234](http://localhost:1234).

### Tunnel

```zsh
$ yarn run tunnel
```

Opens up a tunnel to outside world with [serveo](https://serveo.net).

### Serve

```zsh
$ yarn serve
```

Combines the "start" and "tunnel" scripts in one. Launches a dev server, and exposes it to the internet with a tunnel.

### Build

```zsh
$ yarn run build
```

Builds your project for production, outputting to the "dist" directory.

### Production Share

```zsh
$ yarn prod-share
```

Builds your project for production and launches browsersync to serve your production build.

## Checkout these fine folks!

Thanks to the open source community!

- [Parcel](https://parceljs.org/)
- [PostCSS](https://postcss.org)
- [Sugarss](https://github.com/postcss/sugarss) (Indent-style CSS syntax)
- [PostHTML](https://github.com/posthtml/posthtml)
