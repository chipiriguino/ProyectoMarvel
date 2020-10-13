
const getMarvel = async () => {
    const respose = await fetch("https://superheroapi-m1.herokuapp.com/heroes")
    const marvel = await respose.json()
    let sh = []

    for (let i = 0; i < marvel.length; i++) {
        if (marvel[i].name === "Iron Man" || marvel[i].name === "Captain America" || marvel[i].name === "Thor" || marvel[i].name === "Hulk" || marvel[i].name === "Hawkeye" || marvel[i].name === "Black Panther" || marvel[i].name === "Groot" || marvel[i].name === "Ant-Man" || marvel[i].name === "Doctor Strange") {
            sh.push(marvel[i])
        }
        
    }
    return sh
}



let getInfo = async () => {
    let marvel = await getMarvel()
    console.log(marvel)
    marvel.forEach(function (heroe) {
        if (heroe.name === "Iron Man") {
            ironMan.innerHTML+="<p>His name is: " + heroe.name + " ,and his powerstats are:" + "Speed:" + heroe.powerstats.speed + " Intelligence:" + heroe.powerstats.intelligence + " Strength:" + heroe.powerstats.strength + " Power:" + heroe.powerstats.power + " Combat:" + heroe.powerstats.combat + ". We can know more about our friend avenger through his biography:" + "His real full name is " + heroe.biography.fullName + ". His alterEgos:" + heroe.biography.alterEgos + ". And his aliases:" + heroe.biography.aliases + ". And even know more with our top secret files: Like his occupation: " + heroe.work.occupation + " and his base: " + heroe.work.base + "</p>"

        }
    })
   

}
const ironMan = document.querySelector(".ironmanA");
ironMan.addEventListener("click", getInfo);

// function clickk(){
//     ironMan.addEventListener("click", clickk);
//   let popUp = document.getElementById("Iron Man");
//   if (popUp.style.visibility == "visible") {
//     popUp.style.visibility = "hidden";
//   } else {
//     popUp.style.visibility = "visible";
//   }
//   ironMan.removeEventListener("click", spotClick);
// }




// return "His name is:"+ironman.name+" ,and his powerstats are:"+"Speed:"+ ironman.powerstats.speed+" Intelligence:"+ ironman.powerstats.intelligence+" Strength:"+ ironman.powerstats.strength+" Power:"+ ironman.powerstats.power+" Combat:"+ ironman.powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[0].biography.fullName+". His alterEgos:"+ironman.biography.alterEgos+". And his aliases:"+ironman.biography.aliases+". And even know more with our top secret files: Like his occupation: "+ironman.work.occupation+" and his base: "+ironman.work.base
// return "His name is:"+sh[1].name+" ,and his powerstats are:"+"Speed:"+ sh[1].powerstats.speed+" Intelligence:"+ sh[1].powerstats.intelligence+" Strength:"+ sh[1].powerstats.strength+" Power:"+ sh[1].powerstats.power+" Combat:"+ sh[1].powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[1].biography.fullName+". His alterEgos:"+sh[1].biography.alterEgos+". And his aliases:"+sh[1].biography.aliases+". And even know more with our top secret files: Like his occupation: "+sh[1].work.occupation+" and his base: "+sh[1].work.base
// return "His name is:"+sh[2].name+" ,and his powerstats are:"+"Speed:"+ sh[2].powerstats.speed+" Intelligence:"+ sh[2].powerstats.intelligence+" Strength:"+ sh[2].powerstats.strength+" Power:"+ sh[2].powerstats.power+" Combat:"+ sh[2].powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[2].biography.fullName+". His alterEgos:"+sh[2].biography.alterEgos+". And his aliases:"+sh[2].biography.aliases+". And even know more with our top secret files: Like his occupation: "+sh[2].work.occupation+" and his base: "+sh[2].work.base
// return "His name is:"+sh[3].name+" ,and his powerstats are:"+"Speed:"+ sh[3].powerstats.speed+" Intelligence:"+ sh[3].powerstats.intelligence+" Strength:"+ sh[3].powerstats.strength+" Power:"+ sh[3].powerstats.power+" Combat:"+ sh[3].powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[3].biography.fullName+". His alterEgos:"+sh[3].biography.alterEgos+". And his aliases:"+sh[3].biography.aliases+". And even know more with our top secret files: Like his occupation: "+sh[3].work.occupation+" and his base: "+sh[3].work.base
// return "His name is:"+sh[4].name+" ,and his powerstats are:"+"Speed:"+ sh[4].powerstats.speed+" Intelligence:"+ sh[4].powerstats.intelligence+" Strength:"+ sh[4].powerstats.strength+" Power:"+ sh[4].powerstats.power+" Combat:"+ sh[4].powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[4].biography.fullName+". His alterEgos:"+sh[4].biography.alterEgos+". And his aliases:"+sh[4].biography.aliases+". And even know more with our top secret files: Like his occupation: "+sh[4].work.occupation+" and his base: "+sh[4].work.base
// return "His name is:"+sh[5].name+" ,and his powerstats are:"+"Speed:"+ sh[5].powerstats.speed+" Intelligence:"+ sh[5].powerstats.intelligence+" Strength:"+ sh[5].powerstats.strength+" Power:"+ sh[5].powerstats.power+" Combat:"+ sh[5].powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[5].biography.fullName+". His alterEgos:"+sh[5].biography.alterEgos+". And his aliases:"+sh[5].biography.aliases+". And even know more with our top secret files: Like his occupation: "+sh[5].work.occupation+" and his base: "+sh[5].work.base
// return "His name is:"+sh[6].name+" ,and his powerstats are:"+"Speed:"+ sh[6].powerstats.speed+" Intelligence:"+ sh[6].powerstats.intelligence+" Strength:"+ sh[6].powerstats.strength+" Power:"+ sh[6].powerstats.power+" Combat:"+ sh[6].powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[6].biography.fullName+". His alterEgos:"+sh[6].biography.alterEgos+". And his aliases:"+sh[6].biography.aliases+". And even know more with our top secret files: Like his occupation: "+sh[6].work.occupation+" and his base: "+sh[6].work.base
// return "His name is:"+sh[7].name+" ,and his powerstats are:"+"Speed:"+ sh[7].powerstats.speed+" Intelligence:"+ sh[7].powerstats.intelligence+" Strength:"+ sh[7].powerstats.strength+" Power:"+ sh[7].powerstats.power+" Combat:"+ sh[7].powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[7].biography.fullName+". His alterEgos:"+sh[7].biography.alterEgos+". And his aliases:"+sh[7].biography.aliases+". And even know more with our top secret files: Like his occupation: "+sh[7].work.occupation+" and his base: "+sh[7].work.base
// return "His name is:"+sh[8].name+" ,and his powerstats are:"+"Speed:"+ sh[8].powerstats.speed+" Intelligence:"+ sh[8].powerstats.intelligence+" Strength:"+ sh[8].powerstats.strength+" Power:"+ sh[8].powerstats.power+" Combat:"+ sh[8].powerstats.combat+". We can know more about our friend avenger through his biography:"+"His real full name is "+sh.[8].biography.fullName+". His alterEgos:"+sh[8].biography.alterEgos+". And his aliases:"+sh[8].biography.aliases+". And even know more with our top secret files: Like his occupation: "+sh[8].work.occupation+" and his base: "+sh[8].work.base






