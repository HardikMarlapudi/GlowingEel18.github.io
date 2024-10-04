class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }
}

const dogs = [];
//const myDoc = new Dog("molly", "pit bull", "brown", 4, "xs", "imges/molly.jpg");
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Coco", "Morkie", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dog-list").append(dog.item);

});

firstColumn.append(this.PictureInPictureEvent(this.pic));
