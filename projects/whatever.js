const myMeat = {

    _raw: '',
    _thick: '',
    _time: '',

    set rawTime (_raw) {
    if(this._raw > 100) {
    return true;
    }
    else {
    return false;
    }
    },

    set trueThick (_thick) {
        if (this._thick === 'thick') {
            return true;
        }
        else {
            return false;
        }
    },

    set trueTime(_time) {
        if (this._time === 60) {
            return true;
        }
        else {
            return false;
        }
    },
    get mealTime () {
        if (this._time === 60) {
            return `Ready in 1 hour!`;
        }
        else if (this._time > 60) {
            return 'Meat will be overcooked!';
        }
    },

    get foodReady() {
        if (this._time >= 60 && this._thick === 'thick' && this._raw > 100) {
            return 'The food is ready!';
        }
        else {
            return 'Food is not ready';
        }
    },
};
myMeat._raw = 150;
myMeat._thick = 'thick';
myMeat._time = 60;
console.log(`Is my food ready?: ${myMeat.foodReady}`);