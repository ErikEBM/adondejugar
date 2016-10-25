System.register(["./producto.js", "./mate.js"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var producto_js_1, mate_js_1;
    var verdura;
    return {
        setters:[
            function (producto_js_1_1) {
                producto_js_1 = producto_js_1_1;
            },
            function (mate_js_1_1) {
                mate_js_1 = mate_js_1_1;
            }],
        execute: function() {
            verdura = new producto_js_1.Producto("tomate", 5.5);
            console.log(verdura);
            console.log(mate_js_1.matematica.suma(3, 4));
            console.log(mate_js_1.matematica.division(8, 4));
            console.log(mate_js_1.matematica.resta(5, 4));
            console.log(mate_js_1.matematica.residuo(3, 4));
            console.log(mate_js_1.matematica.producto(3, 4));
        }
    }
});
//# sourceMappingURL=index.js.map