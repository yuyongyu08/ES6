let arr = ['barr', 'foo', 'baz'];

for (var item of arr){
    console.log(item);
}

export default class Test {
    scrollHandler(){
        let elements = ['barr', 'foo', 'baz'];

        for(var element of elements){
            console.log(element);
        }
    }

    scrollHandler1(){
        this.elements = ['barr', 'foo', 'baz'];

        for(var element of this.elements){
            console.log(element);
        }
    }

    scrollHandler2(){
        let elements = document.querySelectorAll(`img[${_this.options.srckey}]`);

        for(var element of elements){
            console.log(element);
        }
    }

};


