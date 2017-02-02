export default class Person {
  constructor(id = -1, name, birth) {
    this.id = id
    this.name = name
    this.birth = birth
  }
  // stage を npm install したら使えるけど stage は使わないほうが良さそう
  // toString = () => ["id: " + this.id, "name: " + this.name, "birth: " + this.birth].join(",")
  toString() {
    return ["id: " + this.id, "name: " + this.name, "birth: " + this.birth].join(",")
  }

  get MAX_ID() {
    return 9999
  }
  get MAX_ID() {
    return 9999
  }
  static get author() { return "sakurai@weblio.co.jp" }
  static get AUTO_ID() { return 0 }
  static ja() { return "japan" }
}

// module.exports = Person;
