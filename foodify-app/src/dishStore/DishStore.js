import { makeAutoObservable } from "mobx";

export default class DishStore {
    constructor() {
        this._dish = {}
        makeAutoObservable(this)
    }

    setNewDish(newDish) {
        this._dish = newDish
    }

    get dish() {
        return this._dish
    }
}