import { Inject, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Db, ObjectID } from 'mongodb';
import { Item } from './item.interface';

@Injectable()
export class ItemsService {

  TABLE_NAME = 'items';

  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}

  async find(): Promise<Item[]> {
    return await this.db.collection(this.TABLE_NAME).find({}).toArray();
  }

  async findOne(id: string): Promise<Item> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException;
    }

    const response = await this.db.collection(this.TABLE_NAME).findOne({
      _id: new ObjectID(id),
    });

    if (!response) {
      throw new NotFoundException;
    }

    return response;
  }

  async create(body: Item): Promise<void> {
    await this.db.collection(this.TABLE_NAME).insertOne(body);
  }


}
