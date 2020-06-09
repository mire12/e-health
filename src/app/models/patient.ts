export class Patient {

  constructor(
    public id: number,
    public name: string,
    public dateOfBirth: Date,
    public gender?: string
  ) {  }
}
