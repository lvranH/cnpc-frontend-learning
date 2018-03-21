let Diamond=["D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13"],
    Spade=["S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","S13"],
    Heart=["H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12","H13"],
    Club=["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13"],
    newCards=[];
const game=()=>{
    let  select,currentCard=Math.floor(Math.random()*4);
    switch(currentCard){
        case 0:
        select=Diamond.shift();
        break;
        case 1:
        select=Spade.shift();
        break;
        case 2:
        select=Heart.shift();
        break;
        case 3:
        select=Club.shift();
        break;
    }
    return select;
}
while((Diamond.length!=0)&&(Spade.length!=0)&&(Heart.length!=0)&&(Club.length!=0)){
    let n=game();
    newCards.push(n);
}
console.log(newCards);
