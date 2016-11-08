'use strict';

export class Pizza {

    constructor(chicken, olives, dough, price) {
        this.chicken = chicken;
        this.olives = olives;
        this.dough = dough;
        this.price = price;
    }

    orderPizza(money) {
        if (money > this.price) {
            return this;
        }
        else {
            return false;
        }
    }
};


export function NewPizza() {

    var state = {
        olives: false,
    };

    this.withChicken = function () {
        state.withChiken = true;
        return this;
    }

    this.withMushrooms = function (mushrooms) {
        state.mushrooms = mushrooms;
        return this;
    }

    this.withBakon = function (bakon) {
        state.bakon = bakon;
        return this;
    }

    this.withOlivies = function () {
        state.olives = true;
        return this;
    }

    this.withDough = function (dough) {
        state.dough = dough;
        return this;
    }
    this.withPrice = function (price) {
        state.price = price;
        return this;
    }

    this.build = function () {
        console.log(state);
        return new Pizza(state.filling, state.olives, state.dough, state.price);
    }
};