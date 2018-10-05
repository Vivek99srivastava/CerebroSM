import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-burndown',
  templateUrl: './sprint-burndown.component.html',
  styleUrls: ['./sprint-burndown.component.css']
})
export class SprintBurndownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}





// import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';

// @Component({
//   selector: 'app-sprint-burndown',
//   templateUrl: './sprint-burndown.component.html',
//   styleUrls: ['./sprint-burndown.component.css']
// })
// export class SprintBurndownComponent implements OnInit {

//   LineChart=[];
//   constructor() { }

//   ngOnInit() {
//     this.LineChart = new Chart('lineChart',{ 
//       type:'line',
//       data:{
//         labels:["jan","feb","mach","april","may"],
//         datasets:[{
//         label:'no of items',
//         data:[9,5,4,3,6,5,2,11,24,54],
//         fill:false,
//         lineTension:0.2,
//         borderColor:'red',
//         borderWidth:1
//       }]
//     },
//     options:{
//       title:{
//         text:"Line chart",
//         display:true
//           },
//           scales:{
//             yAxes:[{
//               ticks:{
//                 beginAtZero:true
//               }
//             }]
//           }
//     })




//   }

// }

