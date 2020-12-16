export class Projects {
  _id: number;
  name: string;
  url: string;
  github: string;

  constructor(item?: any) {
    this._id = item?._id || 0;
    this.name = item?.name || '';
    this.url = item?.url || '';
    this.github = item?.github || '';
  }
}