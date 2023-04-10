(function (){
    function mul(...args) {
   return args.reduce((acc, val) => {
       if (typeof val === "number"){
           return acc + val;
       } else {
           return acc
       }
   }, 0);
    }
    console.log(mul(1, "str", 2, 3, true)); // 6
    console.log(mul(null, "str", false, true)); // 0
})();