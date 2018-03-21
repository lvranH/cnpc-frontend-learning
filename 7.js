let a,b,c;
for(let i=100;i<1000;i++){
    a=parseInt(i%10);
    b=parseInt(i/10)%10;
    c=parseInt(i/100);
    if(a*a*a+b*b*b+c*c*c===i){
        console.log(`${i}是水仙花数`);
    }
}