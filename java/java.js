
// async function get3Pokemon(){                         //sequential requests
//     const poke1 = await axios.get ('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get ('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get ('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }
// get3Pokemon();


// async function get3Pokemon(){                   //parallel calls
//     const prom1 =  axios.get ('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 =  axios.get ('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 =  axios.get ('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(prom1);
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//     console.log(prom1);
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }
// get3Pokemon();

function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
        document.body.style.backgroundColor = color;
        resolve();
    }, delay);
});
}
async function lightShow(){
    await changeBodyColor('teal', 1000);
    await changeBodyColor('red', 1000);
    await changeBodyColor('blue', 1000);
    await changeBodyColor('green', 1000);
    await changeBodyColor('violet', 1000);
}
lightShow();


