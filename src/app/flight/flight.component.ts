import { Component, OnInit } from '@angular/core';
import { flight } from './flight';
import { FlightService } from './flight.service';
@Component({
  selector: 'app-flight',
  templateUrl: 'flight.component.html',
  styleUrls: ['flight.component.css'],
})
export class FlightComponent implements OnInit {
  flights = [];
  model = new flight();
  constructor(private flightService: FlightService) {}
  ngOnInit() {
    this.getAllflights();
  }
  getAllflights() {
    this.flightService.getAllFlightService().subscribe((x: any[]) => {
      this.flights = x;
    });
  }
  editflight(id) {
    this.flightService
      .getFlightService(id)
      .subscribe((data: any) => (this.model = data));
  }
  deleteflight(id: any) {
    this.flightService.deleteFlightService(id).subscribe((data) => {
      this.getAllflights();
    });
  }
  addflight() {
    if (!this.model.id) {
      this.flightService.createFlightService(this.model).subscribe((data) => {
        this.getAllflights();
        this.model = new flight();
      });
    } else {
      this.flightService
        .updateFlightService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllflights();
          this.model = new flight();
        });
    }
  }
}
