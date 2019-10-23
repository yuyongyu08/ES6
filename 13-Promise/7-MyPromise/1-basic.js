class MyPromise{
    constructor(handle){
        if(typeof handle !== 'function'){
            throw new Error('MyPromise must accept a function as parameter');
        }

        this._statusSet = {
            pending: 'PENDING',
            fulfilled: 'FULFILLED',
            rejected: 'REJECTED',
        };

        this._status = this._statusSet.pending;

        this._value = undefined;

        try{
            handle(this._resolve.bind(this), this._reject.bind(this));
        } catch (err){
            this._reject(err);
        }
    }

    _resolve (val){
        if(this._status !== this._statusSet.pending) return;
        this._status = this._statusSet.fulfilled;
        this._value = val;
    }

    _reject (err){
        if(this._status !== this._statusSet.pending) return;
        this._status = this._statusSet.rejected;
        this._value = err;
    }

    then(onFulfiled, onRejected){
        switch (this._status){
            case this._statusSet.fulfilled :
                onFulfiled(this._value);
                break;
            case this._statusSet.rejected:
                onRejected(this._value);
                break;
            default:
                console.log('none');
        }
    }
}

module.exports = MyPromise;