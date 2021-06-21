
function answer() {

    let arr= dataInput.value;
    arr=arr.split('');
    let array4=[];
    let array2=[];
    let Maestro =[5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763];
    let cardSystem = [
        {name: 'Visa', val1:4, },
        {name: 'Mastercard', val1:51, val2:55,  },
        {name: 'Mastercard', val1:2221, val2:2720 },
        {name: 'Maestro', val1: Maestro, }
    ];
    let sumOddValues=0;
    let sumEvenValues=0;
    let paymentSystem=0;
    let i=0;
    

    console.log(arr);

    
    // https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BF%D1%80%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-filter-%D0%B2-javascript-1fcb239a0d74

   // ссылка, где взяла пример фильтра
    function checkNumber( currentValue) {

        
            return !(currentValue === ' ' || typeof currentValue == 'undefined' || currentValue == '-');
        
    }

    arr = arr.filter(checkNumber);  

    if (arr.length != 16) {
        Result.innerHTML = 'Номер карты 16-значный';

    } else {

        arr.reverse(); // развернули массив. последний элемент стал первым. умножать на 2 нужно со 2-го элемента- его индекс 1. т.е индексы нечетные 
        let arrOddIndixes = arr
        .filter(
            function (currentValue, index) {

        
                return !(index%2 == 0);
            
            } 
        )// отфильтровали элементы с нечетными индексами
        .map(currentValue => currentValue * 2); // умножили на 2

        arrOddIndixes.map(
            function doubleNumber( currentValue, index,array  ) {//где сумма больше 9, например 12, из этой суммы вычитаем 9

               if (currentValue>9) {
                array[index] = array[index]-9;
                    
                } else {
                    array[index];// где элемент меньше 10, его просто записываем в массив array
                    
                }
                

                sumOddValues = array.reduce( (total, accum) => total + accum);// складываем элементы массива
                return array, sumOddValues; // возвращаем массив и сумму массива
            }
                 
           
            
        );

        arrEvenIndixes = arr // массив мы перевенули ранее, теперь выбираем все четные индексы
        .filter(
            function (currentValue, index) {

        
                return index%2 == 0;
            
            } 
        )
        .map(currentValue => currentValue * 1); // элементы массива переводим из строки в число путем умножения на 1

        sumEvenValues = arrEvenIndixes.reduce( (total, accum) => total + accum);// суммируем все элементы под четными индексами
        

        console.log(arrEvenIndixes);
        console.log(sumEvenValues, sumOddValues);


        if ( (sumEvenValues+sumOddValues)%10 ==0 ){ // если остаток от деления суммы элементов четных и нечетных массива =0, то все супер

            arr.reverse(); // переворачиваем массив обратно, т.е. в исходное положение
            array4=arr.slice(0,4).map(currentValue => currentValue * 1).join('')*1;// первые 4 цифры карты
            array2=arr.slice(0,2).map(currentValue => currentValue * 1).join('')*1; // первые 2 цифры карты

            console.log(array4, array2);

            // https://en.wikipedia.org/wiki/Payment_card_number

            
            if (arr[0]==cardSystem[0].val1) {
                paymentSystem=`Платежная система ${cardSystem[0].name}`;

            } else if ( (array2>=cardSystem[1].val1 && array2<=cardSystem[1].val2) || (array4>=cardSystem[2].val1 && array4<=cardSystem[2].val2) ) {
                paymentSystem=`Платежная система ${cardSystem[1].name}`;

            } else if (  cardSystem[3].val1.indexOf(array4) != -1 ){
                paymentSystem=`Платежная система ${cardSystem[3].name}`;

            } else {
                paymentSystem='Платежная система не определена';

            }

            Result.innerHTML = `Номер карты корректный. ${paymentSystem}`;

        } else {
            Result.innerHTML = 'Номер карты некорректный.';
        }
        


        
        console.log(arrOddIndixes);

    }
        
    
    
    
      console.log(arr);


}




