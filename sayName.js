//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  function Person (name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function (name, age) {
      alert(this.name)
    }
  }


//Now create three instances of Person with data you make up

  var jeremy = new Person('Jeremy', 'jeremy.huppe@email.com', 30);
  var ruth = new Person('Ruth', 'ruth.aguirre@email.com', 28);
  var henrik = new Person('Henrik', 'henrik.huppe@email.com', 1);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.
