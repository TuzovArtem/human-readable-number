module.exports = function toReadable (number) {
    let result = '';
      let arr = number.toString().split('').reverse();
      let units = '';
      let dozens = '';
      let hundreds = '';

      
       
          switch(arr[0]){
  
                  case '1': units = ' one';
                  break;
                  case '2': units = ' two';
                  break;
                  case '3': units = ' three';
                  break;
                  case '4': units = ' four';
                  break;
                  case '5': units = ' five';
                  break;
                  case '6': units = ' six';
                  break;
                  case '7': units =  ' seven';
                  break;
                  case '8': units = ' eight';
                  break;
                  case '9': units = ' nine';
                  break;
                  case '0': units = '';
                  break;
          }
  
          
  
  
          switch(arr[1]){
              case '1' : switch(arr[0]){ 
  
                  case '1': dozens = ' eleven';
                  break;
                  case '2': dozens = ' twelve';
                  break;
                  case '3': dozens = ' thirteen';
                  break;
                  case '4': dozens = ' fourteen';
                  break;
                  case '5': dozens = ' fifteen';
                  break;
                  case '6': dozens = ' sixteen';
                  break;
                  case '7': dozens = ' seventeen';
                  break;
                  case '8': dozens = ' eighteen';
                  break;
                  case '9': dozens = ' nineteen';
                  break;
                  case '0': dozens = ' ten';
                  break;
              }
                  break;
              case '2': dozens =' twenty';
              break;
              case '3': dozens = ' thirty';
              break;
              case '4': dozens = ' forty';
              break;
              case '5': dozens = ' fifty';
              break;
              case '6': dozens = ' sixty';
              break;
              case '7': dozens = ' seventy';
              break;
              case '8': dozens = ' eighty';
              break;
              case '9': dozens = ' ninety';
              break;
              case '0': dozens = '';
              break;
      }
  
  
      switch(arr[2]){
  
          case '1': hundreds = 'one hundred';
          break;
          case '2': hundreds = 'two hundred';
          break;
          case '3': hundreds = 'three hundred';
          break;
          case '4': hundreds = 'four hundred';
          break;
          case '5': hundreds = 'five hundred';
          break;
          case '6': hundreds = 'six hundred';
          break;
          case '7': hundreds = 'seven hundred';
          break;
          case '8': hundreds = 'eight hundred';
          break;
          case '9': hundreds = 'nine hundred';
          break;
          case '0': hundreds = '';
          break;
  }
          if(arr[1] === '1'){
              units = '';
          }
          result = `${hundreds}${dozens}${units}`;
  
      let result1 =  result.trim()
         
     if(number.toString() == '0'){
         result1 = 'zero'
     }

      return result1;
}
