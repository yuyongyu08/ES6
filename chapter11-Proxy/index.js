let obj = new Proxy({}, {
    set: function (target, key, value, receiver) {
        console.log(`setting '${value}' to ${key}`);
        return Reflect.set(target, key, value,receiver);
    },
    get: function (target, key, receiver) {
        console.log(`getting ${key}`);
        return Reflect.get(target, key,receiver);
    }
});

obj.title = 'test proxy';

obj.title;