
//lets take about callback

// function addEvent(callback){
//     setTimeout(function(){
//         var i = 0;
//         while(i < 1000000000){
//             i++;
//         }
//         if(i == 1000000000){
//             callback('done',null);
//         }else{
//             callback(null,'error');
//         }
//     }, 0);
// }

// addEvent(function(text,err){
//     if(text){
//         return console.log(text);
//     }
//     console.log(err);
// })

// lets take about promise

function addEvent() {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
        var i = 0;
        while(i < 1000000000){
            i++;
        }
        if(i==100056000000){
            resolve('done');
        }else{
            reject('error');
        }
      
    },0)
  });
}

addEvent()
  .then(function (text) {
    console.log(text);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log('finally');
  });