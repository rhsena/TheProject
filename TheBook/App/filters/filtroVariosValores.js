angular.module("thebook").filter("filtrarVarios", function () {
    return function (input, Array) {
            return input.filter(function (elemento) {
                console.log(elemento.Tipo);
                //return 
                if (Array.length === 0)
                    return true;
                else {
                   return (Array.indexOf(elemento.Tipo) !== -1 ? true : false);
                }
            });
        
    }
    
});