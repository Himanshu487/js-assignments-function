
let a = Number(prompt("enter the score of first round for dolpins"));
let b = Number(prompt("enter the score of second round for dolpins"));
let c = Number(prompt("enter the score of third round for dolpins"));

let d = Number(prompt("enter the score of first round for koala"));
let e = Number(prompt("enter the score of second round for koala"));
let f = Number(prompt("enter the score of third round for koala"));

calcAverage=(x,y,z)=>{
  return  (x + y + z)/3;
}

// let checkC= calcAverage(23,32,43);
// console.log('checkC',checkC)
const avgDolphins=(a,b,c)=>{
   return calcAverage(a,b,c);
}
let Dolphins = avgDolphins(a,b,c);
console.log('Dolphins',Dolphins);


const avgKoalas=(d,e,f)=>{
   return calcAverage(d,e,f);
}
let Koala = avgKoalas(d,e,f);
console.log('Koala',Koala);



const checkWinner=(avgDolphins,avgKoalas)=>{

    if(avgDolphins>=avgKoalas*2){
        console.log(`the Dolphins are the winner's with the score of ${avgDolphins}`);
    }

    else if(avgKoalas>=avgDolphins*2){
        console.log(`the Dolphins are the winner's with the score of ${avgKoalas}`);
    }
    else{
        console.log(`no one wins`);
    }

}

checkWinner(Dolphins,Koala);