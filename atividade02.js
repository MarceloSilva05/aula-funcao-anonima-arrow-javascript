
//1 

let multiploDeCinco=(numero=5)=>{
if (numero%5==0&&numero%3==0) {
    console.log("JAVASCRIPT");
} else if(numero%3==0){
    console.log("Dale");
}else if (numero%5==0) {
    console.log("Bora");
}else{
    console.log("erro");
}
}
multiploDeCinco();

//2

let signo=(dia,mes)=>{
    if (mes==3&&dia>=21&&dia<=31||mes==4 && dia>0 && dia<=20) {

        console.log("Seu signo é Áries");
    }else if(mes==4 && dia>=21&&dia<=31||mes==5 && dia>0 && dia<=20) {

        console.log("Seu signo é Touro");
    } else if(mes==5&&dia>=21&&dia<=31||mes==6&&dia>0&&dia<=20) {

        console.log("Seu signo é Gêmeos");
    }else if(mes==6&&dia>=21&&dia<=30||mes==7&&dia>0&&dia<=22){

        console.log("Seu signo é Câncer");
    }else if(mes==7&&dia>=23&&dia<=31||mes==8&&dia>0&&dia<=22){

        console.log("Seu signo é Leão");
    }else if(mes==8&&dia>=23&&dia<=31||mes==9&&dia>0&&dia<=22){

        console.log("Seu signo é Virgem");
    }else if(mes==9&&dia>=23&&dia<=30||mes==10&&dia>0&&dia<=22){

        console.log("Seu signo é Libra");
    }else if(mes==10&&dia>=23&&dia<=31||mes==11&&dia>0&&dia<=21){

        console.log("Seu signo é Escorpião");
    }else if(mes==11&&dia>=22&&dia<=30||mes==12&&dia>0&&dia<=21){

        console.log("Seu signo é Sagitário");
    }else if(mes==12&&dia>=22&&dia<=31||mes==1&&dia>0&&dia<=19){

        console.log("Seu signo é Capricórnio");
    }else if(mes==1&&dia>=20&&dia<=31||mes==2&&dia>0&&dia<=18){

        console.log("Seu signo é Aquário");
    }else if(mes==2&&dia>=19&&dia<=29||mes==3&&dia>0&&dia<=20){
        console.log("Seu signo é Peixes");
    }else{
        console.log("Muito mula,não sabe nem a data de aniversário!");
    }
}
signo(5,5);

/*

Ordem dos meses	Mês	Dias
1	Janeiro	tem 31 dias
2	Fevereiro	tem 28 dias (29 dias nos anos bissextos)
3	Março	tem 31 dias
4	Abril	tem 30 dias
5	Maio	tem 31 dias
6	Junho	tem 30 dias
7	Julho	tem 31 dias
8	Agosto	tem 31 dias
9	Setembro	tem 30 dias
10	Outubro	tem 31 dias
11	Novembro	tem 30 dias
12	Dezembro	tem 31 dia
*/