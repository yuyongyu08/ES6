class MyPromise {
    constructor(handle) {
        if (typeof handle !== 'function') {
            throw new Error('MyPromise must accept a function as parameter');
        }

        this._statusSet = {
            pending: 'PENDING',
            fulfilled: 'FULFILLED',
            rejected: 'REJECTED',
        };
        this._status = this._statusSet.pending;

        this._value = undefined;
        this._reason = undefined;

        this._onResolvedCallbacks = [];
        this._onRejectedCallbacks = [];

        try {
            handle(this._resolve.bind(this), this._reject.bind(this));
        } catch (err) {
            this._reject(err);
        }
    }

    _resolve(val) {
        if (this._status === this._statusSet.pending) {
            this._status = this._statusSet.fulfilled;
            this._value = val;
            this._onResolvedCallbacks.forEach(fn => fn(this._value));
        }
    }

    _reject(err) {
        if (this._status === this._statusSet.pending) {
            this._status = this._statusSet.rejected;
            this._reason = err;
            this._onRejectedCallbacks.forEach(fn => fn(this._reason));
        }
    }

    then(onFulfiled, onRejected) {
        return new MyPromise((resolve, reject) => {
            //为啥要包装一层？
            const resolveFn = value => {
                try {
                    const x = onFulfiled(value);
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(value);
                } catch (error) {
                    reject(error)
                }
            }

            const rejectFn = err => {
                try {
                    const x = onRejected(err);
                    x instanceof MyPromise ? x.then(resolve, reject) : reject(err);
                } catch (error) {
                    reject(err)
                }
            }

            switch (this._status) {
                case this._statusSet.fulfilled:
                    resolveFn(this._value);
                    break;
                case this._statusSet.rejected:
                    rejectFn(this._reason);
                    break;
                case this._statusSet.pending:
                    this._onResolvedCallbacks.push(resolveFn);
                    this._onRejectedCallbacks.push(rejectFn)
                    break;
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }

    //todo 没看懂
    finallly(callback) {
        return this.then(value => MyPromise.resolve(callback()).then(() => value), error => {
            MyPromise.resolve(callback()).then(() => error)
        })
    }

    static resolve(value) {
        return value instanceof MyPromise ? value : new MyPromise(resolve => resolve(value))
    }

    static reject(err) {
        return new MyPromise((resolve, reject) => reject(err))
    }

    static all(promiseArray) {
        return new MyPromise((resolve, reject) => {
            let result = [], count = 0;
            promiseArray.forEach((promise, index) => {
                promise.then(value => {
                    result[index] = value;
                    count++;
                    if (count === promiseArray.length) {
                        resolve(result)
                    }
                }, err => {
                    reject(err)
                })
            })
        })
    }

    static race(promiseArray) {
        return new MyPromise((resolve, reject) => {
            promiseArray.forEach(promise => {
                promise.then(res => resolve(res), err => reject(er))
            })
        })
    }
}

/**
 * 关键点：
 * 1.处理异步：使用发布订阅者模式，用then来注册事件，在resolve/reject中执行事件
 * 2.链式调用：返回一个新实例
 * 3.值穿透：
 * 
*/

module.exports = MyPromise;