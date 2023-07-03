import { CreateCoffeeDto } from './create-coffee.dto';

describe('CreateCoffeeDt', () => {
  it('should be defined', () => {
    expect(new CreateCoffeeDto()).toBeDefined();
  });
});
