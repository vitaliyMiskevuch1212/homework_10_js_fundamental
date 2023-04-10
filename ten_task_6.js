(function (){
    const arr = [];

    for (let i = 0; i <= 2; i++) {
        let j = i;
        arr[i] = function () {
            console.log(j);
        };
    }

    arr[0](); // 0
    arr[arr.length - 1](); // 2
})();