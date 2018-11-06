import { Component, OnInit } from '@angular/core';
//import { Chart } from '/Projects/Demo/CerebroNew/node_modules/chartjs/chart.js';

export interface Feature {
  value: string;
  viewValue: string;

}
@Component({
  selector: 'app-sprint-burndown',
  templateUrl: './sprint-burndown.component.html',
  styleUrls: ['./sprint-burndown.component.css']
  
})
export class SprintBurndownComponent implements OnInit {

selectedValue: string;

features: Feature[] = [
  {value: 'steak-0', viewValue: 'Sprint1'},
  {value: 'steak-1', viewValue: 'Sprint2'},
  {value: 'tacos-2', viewValue: 'Sprint3'},
  {value: 'steak-3', viewValue: 'Sprint4'},
];

LineChart = [];
constructor() { }

ngOnInit() {
                  

  /*this.LineChart = new Chart('lineChart', {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
      label: '',      
      data: [9, 5, 45, 3, 6, 5, 20, 11, 24, 54, 78, 100],
      lineTension: 0.2,
      borderColor: 'red',
      borderWidth: 1,
    
    }]
  },
    options: {
     title: {
      text: 'Sprint Burndown',
       display: true,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
                    }
                 }]
     }
    },
        maintainAspectRatio: false,
             plugins: {
               filler: {
                     propagate: false
                }
             },

        })*/
}


}
