'use strict';

export class Pizza {

    constructor(chicken, olives, dough, bacon, mushrooms, price) {
        this.chicken = chicken;
        this.olives = olives;
        this.dough = dough;
        this.price = price;
        this.bacon = bacon,
        this.mushrooms = mushrooms,
        this.isReady = false;
    }

    orderPizza(money) {
        if (money >= this.price) {
            this.isReady = true;
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
        mushrooms: false,
        bacon: false
    };

    this.withChicken = function () {
        state.withChiken = true;
        return this;
    }

    this.withMushrooms = function () {
        state.mushrooms = mushrooms;
        return this;
    }

    this.withBacon = function () {
        state.bacon = bacon;
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
        return new Pizza(state.chicken, state.olives,
            state.dough, state.bacon, state.mushrooms, state.price);
    }
};