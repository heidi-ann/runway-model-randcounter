/*
 * Copyright (c) 2015-2016, Salesforce.com, Inc.
 * All rights reserved.
 * Licensed under the MIT license.
 * For full license text, see LICENSE.md file in the repo root or
 * https://opensource.org/licenses/MIT
 */

"use strict";

let View = function (controller, svg, module) {
    let model = module.env;
    
    // Update svg to refer to the d3 element
    svg = d3.select(svg);
    
    let data = model.vars.get('counters').items;

    // Create a group for each piece of data
    let counters = svg.selectAll('g')
	    .data(data)
        .enter()
        .append('g');
    
    // For each counter draw a circle, dictating x pos by index
    counters
	    .append('circle')
	    .style('fill', '#aaaaaa')
        .attr('r', 10)
        .attr('cx', function (d, i) { return 10 + i * 25; })
        .attr('cy', 30)
    
    // For each counter create a text element and set the text to the value
    counters
	    .append('text')
        .attr('x', function (d, i) { return 10 + i * 25; })
        .attr('y', 30)
        .style({
            'text-anchor': 'middle',
            'dominant-baseline': 'central',
            'font-size': 12,
        })
        .text(function (d) { return d; });
    
    return {
        update: function () {
            // On update set the text for each counter to its new value
            counters.selectAll('text').text(function (d) { return d; });
        }
    };

}; // View

module.exports = View;
