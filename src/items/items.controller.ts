import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Item } from './item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Item[] {
        return this.itemsService.getFindAll()
    }
    @Get(':id')
    findById(@Param() param: { id: string }): Item {
        return this.itemsService.getFindById(param.id)
    }

    @Post()
    create(@Body() item: Item): Item {
        return this.itemsService.postCreate(item)
    }
}