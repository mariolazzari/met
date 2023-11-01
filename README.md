# Met

This package is a TypeScript based wrapper around the public REST APIs of *Metropolitan museum of Art* (New York).

**Prerequisites**

This package requires [NodeJS](https://nodejs.org) (version 18 or later) and a node package manager (Npm, Yarn, Pnpm or Bun).

To make sure you have them available on your machine, try running the following command.

```sh
npm -v && node -v
v10.1.0
v20.9.0
```

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installation

**BEFORE YOU INSTALL:** please read the prerequisites.

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/mariolazzari/met.git
$ cd met
```

To install and set up the library, run:

```sh
$ npm install @mariolazzari/met
```

## Usage

**Import package**

```sh
import { Met } from "@mariolazzari/met"
```

**Watch mode**

```sh
npm test
```

**Unit testing**

```sh
npm test
```

**Bulding new version**

```sh
npm build
```

This task will create a distribution version of the project inside your local *dist/* folder


## Met class

Met *class* content handles all the requests and the responses to the Metropolitan museum of Art public REST APIs.

### Constructor

In order to initialize Met client:

```js
const met = new Met()
```

### Methods

Met client includes the following public methods:

### getDepartments

### getObject

### search


## Authors

* **Mario Lazzari** - *Initial work*

## Links

* Demo [app](https://www.mariolazzari.it/hobbies/art/met)
* My personal [site](https://mariolazzari.it)
* My [github](https://github.com/mariolazzari) profile
* Metropolitan Museum of Art APIs [documentation](https://metmuseum.github.io/)
