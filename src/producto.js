System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Producto;
    return {
        setters:[],
        execute: function() {
            Producto = (function () {
                function Producto(nombre, precio) {
                    this.nombre = nombre;
                    this.precio = precio;
                }
                return Producto;
            }());
            exports_1("Producto", Producto);
        }
    }
});
//# sourceMappingURL=producto.js.map