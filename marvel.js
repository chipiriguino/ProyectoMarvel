const getMarvel=async()=>{
    const respose=await fetch("https://superheroapi-m1.herokuapp.com/heroes")
    const marvel=await respose.json()
return marvel
}


const ironMan=async()=>{
const marvel= await getMarvel()
let sh=[]
for( let i=0;i<marvel.length;i++){
if(marvel[i].name==="Iron Man" || marvel[i].name==="Captain America" || marvel[i].name==="Thor" || marvel[i].name==="Hulk"|| marvel[i].name==="Hawkeye" || marvel[i].name==="Black Panther" || marvel[i].name==="Groot" || marvel[i].name==="Ant-Man" || marvel[i].name==="Doctor Strange"){
sh.push(marvel[i])
}
}
return sh
}

ironMan()