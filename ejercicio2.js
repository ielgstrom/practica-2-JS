const b="no_he_venido_aqui_a_comprar_flores";
const bStringed=b.split("_");
let bCamel= ""
for (const palab of bStringed){
  bCamel += palab[0].toUpperCase()+palab.slice(1);
}

console.log(bCamel);



const c="noHayPanParaTantoTonto";

for (let i=0; i < c.length; i++) {
  if (c[i]===c[i].toUpperCase()){
    c[i] = "_" + c[i].toLowerCase;
  }
}

console.log(c)



