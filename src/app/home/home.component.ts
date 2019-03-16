import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { student } from '../allclasses/student';
import { StudentService } from '../allservices/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  total:number;
  dataSource: Object;
  /** Based on the screen size, switch from standard to one column per row */

  constructor() {
    this.dataSource = {
        chart: {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    }; // end of this.dataSource
} // end of constructor
} // end of class AppComponent


//   //constructor(private breakpointObserver: BreakpointObserver,private _router:Router,private _ser:StudentService) {}
//   ngOnInit() {
//   //   this._ser.gettotalStudent().subscribe(
//   //     (data:any)=>{
//   //       this.total=data[0].total
//   //     }
//   //   )
//   // }









//   }
// }
