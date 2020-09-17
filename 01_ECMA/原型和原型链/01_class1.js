/* 
使用ES6的类设计并测试以下需要
  需求1: 
    现在2个人, 都有姓名与年龄(值自己指定), 都能自我介绍自己的姓名和年龄, 能得到当前的总人数
  需求2: 
    现在又有了一个学生, 它有身价的属性, 能介绍它的所有信息
    又有一个老师, 它有教授课程的属性, 能介绍它的所有信息
*/


class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
    // 让原型上的数量加1
    Person.prototype.count++
  }

  xxx = 3 // 给实例对象添加属性
  yyy = () => {} // 给实例添加的方法
  static zzz = 4 // 给类Person添加的属性

  say () { // 在原型对象
    console.log(`姓名: ${this.name}, 年龄: ${this.age}`)
  }

  getCount () {
    return this.count
  }
}

Person.prototype.count = 0 // 初始化原型对象上的count属性

const p1 = new Person('A', 20)
p1.say()
console.log(p1.getCount())

const p2 = new Person('B', 22)
p2.say()

console.log(p1.getCount())
console.log(p2.getCount())
console.log(p2)
console.dir(Person)


class Student extends Person {
  constructor (name, age, price) {
    super(name, age)
    this.price = price
  }

  // 重写say方法
  say () {
    super.say() // this.__ptoto__.say()
    console.log(`姓名: ${this.name}, 年龄: ${this.age}, 准备找个${this.price}的工作`)
  }
}

const s = new Student('C', 22, 15000)
s.say()
console.log(s.getCount()) // 3

console.log(s)