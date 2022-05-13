import Contenedor from './class';

async function main (){
    const almacen = new Contenedor('./D2/products.txt')
    await almacen.getAll();
}

main();