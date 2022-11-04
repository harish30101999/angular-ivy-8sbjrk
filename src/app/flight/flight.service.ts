import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private httpClient: HttpClient) {}
  public getAllFlightService() {
    return this.httpClient.get('http://localhost:8080/flights/');
  }
  public getFlightService(id) {
    return this.httpClient.get('http://localhost:8080/flights/' + id);
  }
  public deleteFlightService(id) {
    return this.httpClient.delete('http://localhost:8080/flights/' + id);
  }
  public createFlightService(flight) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/flights/',
      JSON.stringify(flight),
      {
        headers: headers,
      }
    );
  }
  public updateFlightService(id, flight) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/flights/' + id,
      JSON.stringify(flight),
      {
        headers: headers,
      }
    );
  }
}

