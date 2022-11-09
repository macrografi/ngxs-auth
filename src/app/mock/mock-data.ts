import { InMemoryDbService } from 'angular-in-memory-web-api';
let host = `${window.location.protocol}//${window.location.host}`;

export class MockData implements InMemoryDbService {
  createDb() {
    //JSON data
    let userDetails = [
      {
        token: "token-abces",
      }
    ];

    return {
      user: userDetails,
    };
  }
}
