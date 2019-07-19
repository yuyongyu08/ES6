//【箭头函数不绑定this】
var object = {
    name: "test arrow",
    arrowGetThis: () => this,
    arrowGetName: () => this.name,
    regularGetThis: function() { return this },
    regularGetName: function() { return this.name },
};

console.log('this:', this);
console.log('this.name:', this.name);

console.log('arrow this:', object.arrowGetThis());
console.log('arrow this.name:', object.arrowGetName());

console.log('regular this:', object.regularGetThis());
console.log('regular this.name:', object.regularGetName());
