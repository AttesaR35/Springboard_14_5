/* Updated functions below*/

function newFunc(firstname, lastname){
    return {firstname, lastname};
  }



let favoriteNumber = 42;
const instructor = {
    firstname: "Colt",
    [favoriteNumber]: "That is my favorite number!"
}


const instructor2 = {
    firstname: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

const dog = createAnimal("dog", "bark", "bow wow");

const sheep = createAnimal("sheep", "meep", "baaaaaaa");

function createAnimal(animal, verb, sound){
    return{
        animal,
        [verb](){
            return sound;
        }
    }
}