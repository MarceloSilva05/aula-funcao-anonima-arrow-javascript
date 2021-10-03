

//1
let nomes= function(){

    let capitais=["São Luís","Teresina","Fortaleza"," Natal"," João Pessoa"];
   for (let index = 0; index < capitais.length; index++) {
   console.log( capitais[index] = capitais[index].toUpperCase());;
   }
}
nomes();

//2
let pares=function() {
    for (let n =100;n<450;n++) {
        if (n%2==0) {
           console.log(n); 
        }
        
    }
}
pares();

//3
let quatroStrings=function(){
let v1="oi ",v2="tudo ",v3="bem ",v4="contigo?",resultado;
resultado=v1.concat(v2,v3,v4)
console.log(resultado);
    
}
quatroStrings();
