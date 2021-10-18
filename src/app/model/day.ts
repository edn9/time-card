export class Day {
  public dtCreated: Date;
  public start: any;
  public end: any;
  public description: string;
  public duration: any;
  public dMessage: string;
  public status: string;
  public pause: [];

  constructor() {
    this.dMessage = '';
    this.description = '';
    this.dtCreated = new Date();
    this.pause = [];
  }
}
