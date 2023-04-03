// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity; 
  max = -Infinity;
  sum = 0;
  avg = 0;

  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) { //Поиск максимума
      max = arr[i];
    }
    if (arr[i] < min) { //Поиск минимума
      min = arr[i];
    }
  }

  avg = Number((sum / arr.length).toFixed(2)); //Подсчет среднего значения до 2-х знаков после запятой, преобразуя в число

  return { min: min, max: max, avg: avg };

}

// Задание 2
function worker(arr) {
  let sum=0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++){
    let maxsum = func(arrOfArr[i]);
    if (maxsum > max) {
      max = maxsum;
    }
  }
  
  return max;

}

// Задание 3
function worker2(arr) {
  
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

return max-min;

}