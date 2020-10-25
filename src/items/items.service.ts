import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = []

  getFindAll(): Item[] {
    return this.items;
  }

  getFindById(id: string): Item {
    return this.items.find(i => i.id === id)
  }

  postCreate(item: Item): Item {
    this.items.push(item);

    return item
  }
}
