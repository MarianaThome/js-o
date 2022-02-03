
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309); //é uma boa prática mantermos a inicialização do objeto em uma var, já que iremos popular seus atributos - cliente2 - antes de utilizá-lo como atributo de outro objeto.


const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500); 
const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
conta1.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
