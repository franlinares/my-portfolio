export class Projects {
  _id: number;
  name: string;
  type: string;
  tech: string;
  img: string;
  url: string;
  github: string;

  constructor(item?: any) {
    this._id = item?._id || 0;
    this.name = item?.name || '';
    this.type = item?.type || '';
    this.tech = item?.tech || '';
    this.img = item?.img || '';
    this.url = item?.url || '';
    this.github = item?.github || '';
  }
}