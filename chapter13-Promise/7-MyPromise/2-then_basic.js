const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise{
    constructor(handle){
        if(typeof handle !== 'function'){
            throw new Error('MyPromise must accept a function as parameter');
        }

        this._status = PENDING;

        this._value = undefined;

        try{
            handle(this._resolve.bind(this), this._reject.bind(this));
        } catch (err){
            this._reject(err);
        }
    }

    _resolve (val){
        if(this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;
    }

    _reject (err){
        if(this._status !== PENDING) return;
        this._status = REJECTED;
        this._value = err;
    }

    then(onFulfiled, onRejected){
        switch (this._status){
            case FULFILLED :
                onFulfiled(this._value);
                break;
            case REJECTED:
                onRejected(this._value);
                break;
            default:
                console.log('none');
        }
    }
}

let p = new MyPromise(function (resolve, reject) {
    // setTimeout(function () {
    //     console.log('call');
        resolve('fine')
    // }, 1000)
});

p.then(function (msg) {
    console.log('resolve:', msg);
});