import assert from 'assert'
import { NewPizza } from '../homework/src/Pizza.js'

suite('when i order pizza with chicken', function () {
    let pizza = new NewPizza()
        .withChicken()
        .withOlivies()
        .withDough('thin')
        .withPrice(300)
        .build();

    test('Pizza contains olives', function () {
        assert.equal(true, pizza.olives);
    });
});