import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
  {
    "id": 0,
    "firstName": "Mccarty",
    "secondName": "Richard",
    "houseNumber": 457,
    "apartamentNumber": 84,
    "postalCode": "59-206",
    "phone": "+48 (869) 514-2141",
    "dayBirth": "1944-02-25",
    "age": 21
  },
  {
    "id": 1,
    "firstName": "Morse",
    "secondName": "Erickson",
    "houseNumber": 192,
    "apartamentNumber": 94,
    "postalCode": "47-996",
    "phone": "+48 (881) 546-3685",
    "dayBirth": "1920-07-05",
    "age": 32
  },
  {
    "id": 2,
    "firstName": "Caldwell",
    "secondName": "Mcfarland",
    "houseNumber": 519,
    "apartamentNumber": 84,
    "postalCode": "57-446",
    "phone": "+48 (862) 600-3890",
    "dayBirth": "1944-01-28",
    "age": 34
  },
  {
    "id": 3,
    "firstName": "Fannie",
    "secondName": "Quinn",
    "houseNumber": 988,
    "apartamentNumber": 146,
    "postalCode": "90-974",
    "phone": "+48 (993) 542-2959",
    "dayBirth": "1961-04-28",
    "age": 40
  },
  {
    "id": 4,
    "firstName": "Sheppard",
    "secondName": "Adams",
    "houseNumber": 483,
    "apartamentNumber": 120,
    "postalCode": "30-547",
    "phone": "+48 (986) 416-2533",
    "dayBirth": "1973-01-12",
    "age": 27
  }
]
    return {users};
  }
}