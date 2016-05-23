/*
 * Copyright (c) 2015-2016, Salesforce.com, Inc.
 * All rights reserved.
 * Licensed under the MIT license.
 * For full license text, see LICENSE.md file in the repo root or
 * https://opensource.org/licenses/MIT
 */

"use strict";

let React = require('deprecated!react');
let ReactDOM = require('deprecated!react-dom');

let View = function(controller, svg, module) {

let model = module.env;

let CounterView = React.createClass({
  render: function() {
    let counters = [];
    model.vars.get('counters').forEach((counterVar,i) => {
      let output = ""
      if (counterVar !== undefined) {
        output = counterVar.toString();
      }
      let x1 = i*25
      let x2 = x1 -10
      counters.push(<circle cx={x1} cy={15} r="10"/>)
      counters.push(<text x={x2} y={20} style={{fill: "#ffffff"}}>{output}</text>)
    })
  return  <g>{counters}</g>;

  },
});

let reactComponent = ReactDOM.render(<CounterView />, svg);

return {
  update: function() {
    // trigger a render
    reactComponent.setState({}, () => {
      console.log('rendered');
    });
  }
};

}; // View

module.exports = View;
