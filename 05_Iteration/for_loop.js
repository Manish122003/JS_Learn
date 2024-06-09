let array1 = [10,20,30,40,50,60,70,80]
for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    // console.log(element);
    
}

for (let i = 1; i < 11; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j < 11; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

//break and continue

for (let i=1 ; i <= 10 ; i++){
    if (i==5){
        // console.log("5 detected")
        break
    }
    // console.log(`value of i is ${i}`)
}
for (let i=1 ; i <= 10 ; i++){
    if (i==5){
        console.log("5 detected")
        continue
    }
    console.log(`value of i is ${i}`)
}