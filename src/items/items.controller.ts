import { Controller, Get, Post, Param, Body, Response } from '@nestjs/common';
import { Item } from './item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemsService.find()
    }
    @Get(':id')
    async findById(@Param() param: { id: string }): Promise<Item> {

        console.debug('id', param.id)
        return this.itemsService.findOne(param.id)
    }

    @Post()
    async create(@Body() item: Item): Promise<Item> {
        await this.itemsService.create(item);

        return item
    }
}