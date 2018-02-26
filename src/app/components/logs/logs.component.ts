import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {LogsService} from '../../services/logs.service';
import {Logs} from '../../Logs';

import * as d3 from 'd3';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit, OnChanges, AfterViewInit {
  logs: Logs[] = [];

  constructor(private logsService: LogsService) {
  }

  ngOnInit() {
    this.logsService.getsumerizeLogs()
      .subscribe(log => {
        log.forEach(v => {
          this.logs.push({
            message: v._id,
            count: v.count
          });
        });
        console.log(this.logs);
      });
  }

  createChart() {
    const margin = {top: 10, right: 20, bottom: 200, left: 30};
    const width = 600 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;

    const svg = d3.select('.chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .call(responsivefy)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    const yScale = d3.scaleLinear()
      .domain(d3.extent(this.logs.map(d => d.count)))
      .range([height, 0]);
    const yAxis = d3.axisLeft(yScale);
    svg.call(yAxis);

    const xScale = d3.scaleBand()
      .padding(0.2)
      .domain((this.logs.map(d => d.message)))
      .range([0, width]);

    const xAxis = d3.axisBottom(xScale)
      .ticks(5)
      .tickSize(10)
      .tickPadding(5);
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-40)');

    svg.selectAll('rect')
      .data(this.logs)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.message))
      .attr('y', d => yScale(d.count))
      .attr('width', d => xScale.bandwidth())
      .transition()
          .duration(600)
          .delay(750)
          .ease(d3.easeQuadOut)
      .attr('height', d => height - yScale(d.count))
      .style('fill', '#2826ff');



    function responsivefy(svg) {
      // get container + svg aspect ratio
      const container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style('width')),
        height = parseInt(svg.style('height')),
        aspect = width / height;

      // add viewBox and preserveAspectRatio properties,
      // and call resize so that svg resizes on inital page load
      svg.attr('viewBox', '0 0 ' + width + ' ' + height)
        .attr('preserveAspectRatio', 'xMinYMid')
        .call(resize);

      // to register multiple listeners for same event type,
      // you need to add namespace, i.e., 'click.foo'
      // necessary if you call invoke this function for multiple svgs
      // api docs: https://github.com/mbostock/d3/wiki/Selections#on
      d3.select(window).on('resize.' + container.attr('id'), resize);

      // get width of container and resize svg to fit it
      function resize() {
        const targetWidth = parseInt(container.style('width'));
        svg.attr('width', targetWidth);
        svg.attr('height', Math.round(targetWidth / aspect));
      }
    }

  }

  ngAfterViewInit() {
    setTimeout(() => this.createChart(), 500);
  }

  ngOnChanges() {
  }


}
