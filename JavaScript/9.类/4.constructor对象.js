//  构造函数有 prototype 属性
// prototype 属性又是一个对象，有不可枚举的 constructor 属性
// constructor 属性的值就是该函数对象

let F = function(){}; // 函数对象
let P = F.prototype; // 与 F 关联的原型对象
let C = P.constructor; // 与原型关联的对象
C === F;
console.log(C === F, F.prototype.constructor === F);

// 预定义对象及其 constructor 属性的存在，意味着对象也会继承一个引用其构造函数 constructor 属性。
// 构造函数充当类的公共标识，constructor 返回对象的类
let o = new F() // 创建类 F 的对象 o
o.constructor === F
console.log('返回对象的类 constructor属性指定类',o.constructor === F)

