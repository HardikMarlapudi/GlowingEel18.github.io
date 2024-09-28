/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
  };
  
  document.getElementById("btn-loop").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-first-num").value);
    const endNum = parseINt(document.getElementById("txt-last-num").value);
    const ul = document.getElementById("numbers");
  
    for(let i = startNum; i <= endNum; i++){
      const li = document.createElement("li");
      li.innerHTML = i+1;
      ul.append(li);
      li.setAttribute("id", "li" + i);
  
      li.onclick = () => {
        console.log(`Lucky number ${i}`);
      };
    }
  }
  
  const createLi = (num) => {
    const li = document.createElement("li");
    li.innerHTML = num;
    li.setAttribute("id", "li" + num);

    li.onclick = () => {
      console.log(`Lucky number ${num}`);
    };

    return li;
  }

  let counter = 0;
  let updateCount;

  document.getElementById("btn-count").onclick = (e) => {
    const count = document.getElementById("count");

    if(e.target.innerHTML == "Start"){
      e.target.innerHTML = "Stop";
      updateCount = setInterval(()=>{
        count.innerHTML = counter;
      },1000);
    } else {
      e.target.innerHTML = "Start";
      clearInterval(updateCount);
    }
}

/* Learning arrays */
let toys = ["drum", "ball", "rope", "ballon", "tire"];

/* for(let i = 0; i < toys.length; i++) {
  console.log(toys[i]);
}
*/

/* Shows that you can get the Index if you get it
toys.forEach((i, toy)=> {
  console.log(i + toy);
});
*/

toys.forEach((toy)=> {
  const p = document.createElement("p");
  p.innerHTML = toy;
  document.getElementById("list").append(p);
});

/* Santas expenses */
let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 5.3;
toyPrices["bike"] = 7.4;

/* Associative array */
for(let toy in toyPrices){
  
}