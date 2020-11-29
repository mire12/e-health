export interface Patient {
    id: number,
    name: string,
    dateOfBirth: Date,
    gender?: string,
    lastNames: {
      [key: string]: LastName,
    
  };
}

export interface LastName {
  lastName: String
}
