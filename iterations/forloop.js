// for(i = 0; i<=10; i++){
//   console.log(i);
// }

// nested for loop to print multiplication table
// for(i=1; i<=10; i++){
//   for(j=1; j<=10; j++){
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }

//for loop using break and continue
for(i = 0; i<10; i++){
  if(i == 5){
    console.log("Detected 5");
    break;
  }
  // console.log(i);
}

//break exits the loop when executed

for(i = 0; i<10; i++){
  if(i == 5){
    console.log("Detected 5");
    continue;
  }
  console.log(i);
}

let output = [];
let arr = ["hey", "how", "are", "you", "?"];
for(i=0; i<arr.length; i++){
  output.push(arr[i]);
}
console.log(output);
//continue continues the loop but does not do anything and skips that particular step 