import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartsService } from '../charts.service';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})

export class ChartComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  // private posts: Chart[] = [];

  chart = [];

  /**
   * Lifecycle hook
   * Initiate references to object
   */
  ngOnInit() {

  }


  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [10, 20, 30]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
      options: {  }
  });
  }


}
