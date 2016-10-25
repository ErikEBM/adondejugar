System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Mate, matematica;
    return {
        setters:[],
        execute: function() {
            Mate = (function () {
                function Mate() {
                }
                Mate.prototype.suma = function (valor1, valor2) {
                    return valor1 + valor2;
                };
                Mate.prototype.resta = function (valor1, valor2) {
                    return valor1 - valor2;
                };
                Mate.prototype.producto = function (valor1, valor2) {
                    return valor1 * valor2;
                };
                Mate.prototype.division = function (valor1, valor2) {
                    return valor1 / valor2;
                };
                Mate.prototype.residuo = function (valor1, valor2) {
                    return valor1 % valor2;
                };
                return Mate;
            }());
            exports_1("matematica", matematica = new Mate());
        }
    }
});
//# sourceMappingURL=mate.js.map