export class Datos {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public gender: string,
    public avatar: string
  ) {}

  toString(): string {
    return (
      this.id
      +' '+
      this.firstname
      +' '+
      this.lastname
      +' '+
      this.email
      +' '+
      this.gender
      +' '+
      this.avatar
    );
  }
}
