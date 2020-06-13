let arr = ['1234', '2345', '3456', '4567', '5678', '6789', '7890'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].substr(0, 1) == 2 || arr[i].substr(0, 1) == 4) {
        console.log(arr[i]);
    }
}

no:
for (let i = 1; i < 101; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
       continue no; 
    }
  }
  console.log('Число ' + i + ' - простое. Делители: 1 и ' + i + '.');
}