
function answer() {

    let arr= dataInput.value;
    arr=arr.split('');
    let array=[];
    let sumOddValues=0;
    let sumEvenValues=0;
    let paymentSystem=0;
    

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


            // определение платежных систем взято со стр 5 данного документа https://www.oschadbank.ua/sites/default/files/files/documents-2020/Instrukcziya.pdf  , но есть и другие определения

            if (arr[0]==4) {
                paymentSystem='Платежная система Visa';

            } else if (arr[0]==5) {
                paymentSystem='Платежная система Mastercard';

            } else if (arr[0]==6){
                paymentSystem='Платежная система Maestro';
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




