# from-classname

[![NPM Package Version](https://img.shields.io/npm/v/from-classname.svg?style=flat-square)](https://www.npmjs.com/package/from-classname)
[![Build Status](https://img.shields.io/travis/jonathansamines/from-classname.svg?style=flat-square)](https://travis-ci.org/jonathansamines/from-classname)
[![Dependency Status](https://img.shields.io/david/jonathansamines/from-classname.svg?style=flat-square)](https://david-dm.org/jonathansamines/from-classname)

A simple pure function which generates [React](https://reactjs.org/) components pre-configured with a specified className

## Usage

Usually when writting react components, that adapt an existing css style guide (bootstrap for example), you may end-up with many components which are just containers for those classes.

Instead of doing it manually:

```js
const React = require('react');
const classNames = require('classnames');

const Navigation = ({ className, ...attrs }) => {
  const customClassNames = classNames('this-is-the-base-class', className);

  return (
    <nav className={customClassName} {...attrs} />
  );
};

const Index = () => {
  return (
    <Navigation className='class-override' />
  );
};
```

You can do it with a single function call:

```js
const React = require('react');
const fromClassName = require('from-classname');

const Navigation = fromClassName('nav', 'this-is-the-base-class');

const Index = () => {
  return (
    <Navigation className='class-override' />
  );
};
```

## API

### fromClassName(type, ...classNames) => Component

+ `type` Any valid [React type](https://reactjs.org/docs/react-api.html#createelement)
+ `classNames` All arguments preceding `type` will be directly provided to the [classnames](https://github.com/JedWatson/classnames) module.
