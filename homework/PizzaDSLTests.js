import assert from 'assert'
import { expect } from 'chai'
import {NewPizza} from '../homework/src/Pizza.js'

suite('when i order pizza with chicken', function () {
    let finPizzaWithChickenAndOlives = new NewPizza()
        .withChicken()
        .withOlivies()
        .withDough('thin')
        .withPrice(300)
        .build();

    test('Pizza contains olives', function () {
        assert.equal(finPizzaWithChickenAndOlives.olives, true);
    });

    test('Pizza contains thin dough', function () {
        let thinDough = 'thin';
        assert.equal(finPizzaWithChickenAndOlives.dough, thinDough);
    });

    suite('if i pay 300 rubles', function () {
        test('pizza with chicken will be ready', function (){
            let threeHundredRubles = 300;
            let orderedPizza = finPizzaWithChickenAndOlives.orderPizza(threeHundredRubles);
            assert.equal(orderedPizza.isReady, true);
        })
    });

});

suite('when i order pizza with mushrooms and bacon', function () {
    let fatPizzaWithMushroomsAndBacon = new NewPizza()
        .withMushrooms()
        .withBacon()
        .withDough('fat')
        .withPrice(500)
        .build();

    test('Pizza NOT contains olives', function () {
        assert.equal(fatPizzaWithMushroomsAndBacon.olives, false);
    });

    suite('if i pay 300 rubles', function () {
        test('PizzaShop say "You must pay more money"', function (){
            let threeHundredRubles = 300;

            expect(() =>  fatPizzaWithMushroomsAndBacon.orderPizza(threeHundredRubles))
                .to
                .throw(/You must pay more money/);
        })
    });

});