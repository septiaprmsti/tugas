class Animals {
  sound;
  constructor(name) {
    this.name = name;
  }

  static unknownSound(item) {
    this.sound = "unknown sound.";
    return item.name + " " + this.sound;
  }

  cat() {
    this.sound = "miaow.";
    return this.name + " " + this.sound;
  }

  dog() {
    this.sound = "barks.";
    return this.name + " " + this.sound;
  }

  cow() {
    this.sound = "moos.";
    return this.name + " " + this.sound;
  }
}





const filter = {
  searchText: "",
};
const method = Object.getOwnPropertyNames(Animals.prototype);
const renderAnimals = (method, filter) => {
  const filtered = method.find((item) => {
    return item.toLocaleLowerCase().includes(filter.searchText.toLocaleLowerCase());
  });

  if (filtered === undefined) {
    const name = filter.searchText.charAt(0).toUpperCase() + filter.searchText.slice(1);
    const animal = new Animals(name);
    return Animals.unknownSound(animal);
    
  } else {

    const name = filter.searchText.charAt(0).toUpperCase() + filter.searchText.slice(1);
    const method = filter.searchText.toLocaleLowerCase();
    const animal = new Animals(name);
    return animal[method]();
  }
};

const animalField = document.getElementById('animal_text');
const result = document.getElementById('result');

document.querySelector("#submit").addEventListener("click",function(e){
  filter.searchText = animalField.value
  result.value = renderAnimals(method,filter)
   
 })
