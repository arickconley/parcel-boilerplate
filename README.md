# Parcel Boilerplate

Get up and runnning with PostCSS (Sugarss sytnax), PostHTML (includes for componentizing html), and a tunnel to share with the outside world.

## Why?

Because setting up tooling sucks. Easily the worst part about modern Javascript projects. Especially when you want to use all the great new features, but don't want to spend the time to set up tools everytime. Parcel handles a lot of the headache already, but this makes getting a simple static site up and running extremely easy.

## What's included?

#### Parcel

An amazing, "zero" config bundler with a ton of functionality out of the box, including a development server with hot module replacement. Also sub 100ms build times.
Plugins used:

- parcel-plugin-clean-dist
- parcel-plugin-imageminß

#### PostCSS

All the juicy new CSS features, with JS plugins. Plugins used in this boilerplate:

- Autoprefixer
- PostCSS-nested
- Sugarss

#### PostHTML

Gives you the ability to transform HTML with JS plugins. This boilerplate includes the "posthtml-include" plugin, allowing you to use the

```
<include src="path/to/component.html"></include>
```

tag to import HTML components.

## Getting Started

Clone/Fork this repo

```
$ git clone https://github.com/arickconley/parcel-boilerplate.git project-folder
$ cd project-folder
```

Install the dependencies

```
$ yarn
```

or

```
$ npm i
```

## Commands

### Start

```
$ yarn start
```

Runs parcel on "src/index.html", starts a development server, and opens up a tunnel to outside world with [serveo](https://serveo.net).

### Serve

```
$ yarn run serve
```

Runs parcel on "src/index.html" and starts a development server at "localhost:1234"

### Build

```
$ yarn run build
```

Builds your project for production, outputting to the "dist" directory.

## Checkout these fine folks!

Thanks to the open source community!

- [Parcel](https://parceljs.org/)
- [PostCSS](https://postcss.org)
- [Sugarss](https://github.com/postcss/sugarss) (Indent-style CSS syntax)
- [PostHTML](https://github.com/posthtml/posthtml)
