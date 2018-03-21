
for(let i=1;i<=6;i++){
    let s="";
    for(let j=0;j<=5-i;j++){
        s=s+" ";
    }
    for(let r=1;r<=2*i-1;r++){
        s=s+"*";
    }
    console.log(s);
}
for(let i=1;i<=5;i++){
    let s="";
    for(let j=1;j<=i;j++){
        s=s+" ";
    }
    for(let r=1;r<=11-2*i;r++){
        s=s+"*";
    }
    console.log(s);
}