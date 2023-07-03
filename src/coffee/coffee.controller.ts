import { Body, Controller ,Get, Param ,Post } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {

    @Get('flavours')
    findAll(){
        return 'This action returns all the coffees';
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return `This action returns #${id} Coffee`;
    }
 
    @Post()
    create(@Body('name') body){
        return body;
    }

}