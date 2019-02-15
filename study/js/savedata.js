(function(console){

    console.save = function(data1,data2, filename){

        if((!data1)||(!data1)) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if ((typeof data1 === "object" ) ||(typeof data1 === "object" )) {
             data1 = JSON.stringify(data1, undefined, 4)
             data2 = JSON.stringify(data2, undefined, 4)
         }

         var data_arr = new Array (2);
             data_arr[0]=[data1];
             data_arr[1]=[data2];

        //  var data_arr = new Array (2);
        //  for (i=0; i<=data1.length; i++){
        //  data_arr.push(data1[i],data2[i]);
        // };

        var blob = new Blob([data_arr], {type: 'cvs/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['cvs/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)