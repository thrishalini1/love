import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {

    private coffees :Coffee[] = [

        {
            id:1,
            name: 'rabisto',
            brand: 'nestle',
            flavors: ['chocolate', 'vanilla']
        }
    ];


    findall(){
        return this.coffees
    }

    findOne(id:string){
            // throw 'random error';
            const coffee = this.coffees.find(item=> item.id === +id);
            if(!coffee){
                throw new NotFoundException(`Coffee #${id} not found`)
            }
           return Coffee;
    }
    
    create(createCoffeeDto:any){
        this.coffees.push(createCoffeeDto)
        return createCoffeeDto; 
    }

    update(id:string , updateCoffeDto:any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee){
            console.log( 'Coffee exists and not updated')
        }
    }
    
    remove(id: string){
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id )
        if(coffeeIndex>0){
            this.coffees.splice(coffeeIndex , 1);
        }
    }
}
