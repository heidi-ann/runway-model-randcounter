/*
 * Copyright (c) 2015-2016, Salesforce.com, Inc.
 * All rights reserved.
 * Licensed under the MIT license.
 * For full license text, see LICENSE.md file in the repo root or
 * https://opensource.org/licenses/MIT
 */

"use strict";

let View = function(controller, svg, module) {
  let model = module.env;

  svg = d3.select(svg)
  .append('g');

  model.vars.get('counters').forEach((counterVar,i) => {
    svg.append('circle')
    .style('fill', '#aaaaaa')
    .attr('r', 10)
    .attr('cx',i*25)
    .attr('cy',30);
    svg.append('text')
    .attr('class', 'serverId')
    .attr('x',i*25)
    .attr('y',30)
    .style({
      'text-anchor': 'middle',
      'dominant-baseline': 'central',
      'font-size': 12,
    })
    .text(counterVar);
  })

  let draw = function() {
    var txt = svg.selectAll('text')
    txt.data(model.vars.get('counters'))
    .enter().append('text')
    .text(function(data,i){return data;});
  }

  return {
    update: function() {
      draw();
      }
  };

}; // View

module.exports = View;
