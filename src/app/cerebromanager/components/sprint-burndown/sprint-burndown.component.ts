// import { Component, OnInit ,ViewEncapsulation } from '@angular/core';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { Chart } from 'chart.js';
declare const Chart;

export interface Feature {
  value: string;
  viewValue: string;

}

@Component({
  selector: 'app-sprint-burndown',
  templateUrl: './sprint-burndown.component.html',
  styleUrls: ['./sprint-burndown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SprintBurndownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      // setTimeout(() => {
      //     this.createChart();
      // }, 200)
  }
  createChart() {
      new Chart('chart-2', {
          type:'line',
          data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              datasets: [
                  {
                      backgroundColor: '#7E57C2',
                      borderColor: '#7E57C2',
                      data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                      label: 'Dataset',
                      fill: 'false'
                  },
                  
              ]
          },
          options: {
              legend: {
                  display: false
              },
              elements: {
                  line: {
                      tension: 0.000001
                  }
              },
              maintainAspectRatio: false,
              plugins: {
                  filler: {
                      propagate: false
                  }
              },
              title: {
                  display: true,
                  text: 'SALES GRAPH'
              }
          }
      })
  }
}
