import { Injectable } from '@nestjs/common';

export interface Picture {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {
  private images: Picture[] = [
    { id: 1, name: 'image1', year: 2010 },
    { id: 2, name: 'image2', year: 2011 },
    { id: 3, name: 'image3', year: 2012 },
  ]

  getImages(): Picture[] {
    return this.images;
  }
}
