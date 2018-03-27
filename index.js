'use strict';

const React = require('react');
const classnames = require('classnames');

/**
 * Creates a new React Component whose root element is {element}
 * and the root element's classname is {baseClassName}
 *
 * When an element is generated from the returned Component, additional classNames can be provided
 * and will be appended to {baseClassName}
 *
 * @example
 * const fromClassName = require('from-classname');
 *
 * const Navigation = fromClassName('nav', 'my-navigation-classname');
 * const Index = () => <Navigation className='other-custom-class'>Hello to the world</Navigation>;
 *
 * // Will produce
 * // <nav className='my-navigation-classname other-custom-class' />
 *
 * @param {String|React.Component} type Anything that can be provided to {React.createElement}
 * @param {String|Object|Array} baseClassName Any valid argument for `classnames`
 * @returns {React.Component}
 */
function fromClassName(type, ...baseClassName) {
  return (props) => {
    const customProps = Object.assign({}, props, {
      className: classnames(...baseClassName, props.className),
    });

    return React.createElement(
      type,
      customProps,
    );
  };
}

module.exports = fromClassName;
