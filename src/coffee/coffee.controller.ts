import {
     Body,
     Controller ,
     Delete,
     Get,
     HttpCode, 
     HttpStatus, 
     Param ,
     Patch,
     Post, 
     Query, 
     Res} from '@nestjs/common';

import { CoffeesService } from 'src/coffees/coffees.service';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dt/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto/update-coffee.dto';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeService:CoffeesService){
        
    }


    @Get()
    findAll(@Query() paginationQuery){
        const {limit,offset} = paginationQuery
        // return ('This action returns all the coffees');
        // return `limit is ${limit} and offset is ${offset}`
        return this.coffeService.findall()
    }

    // @Get('flavours')
    // findAll(@Res() response){
    //     response.status(200).send('This action returns all the coffees');
    // }

    @Get(':id')
    findOne(@Param('id') id: string){
        // return `This action returns #${id} Coffee`;
        return this.coffeService.findOne(id)
    }
 
    @Post()
    // @HttpCode(HttpStatus.GONE)
    // create(@Body('name') body){
    create(@Body() createCoffeeDto:CreateCoffeeDto){
        // return body; 
        return this.coffeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string , @Body() updateCoffeeDto : UpdateCoffeeDto){
        // return `This action updates #${id} Coffee`;
        return this.coffeService.update(id,updateCoffeeDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string ){
        // return `This action deletes #${id} Coffee`;
        return this.coffeService.remove(id)
    }
}