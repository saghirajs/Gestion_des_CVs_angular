export class Personne {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  path: string;
  cin: number;
  job: string;

  constructor(id = 0, firstName = '', lastName = '', age = 0, path = '', cin = 1, job = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
}
