const a="gatitos";
const b="no_he_venido_aqui_a_comprar_flores";
const aSnakecase=a[0].toUpperCase()+a.slice(1);
const bStringed=b.split("_");
let bCamel= ""
for (const palab of bStringed){
  bCamel += palab[0].toUpperCase()+palab.slice(1);
}

const c="noHayPanParaTantoTonto"

console.log(aSnakecase);

console.log(bCamel);

console.log(c.replaceAll("[A-Z]","_ [a-z]"));
