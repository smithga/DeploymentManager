System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Package;
    return {
        setters:[],
        execute: function() {
            Package = (function () {
                function Package(id, name, description) {
                    this.id = id;
                    this.name = name;
                    this.description = description;
                }
                return Package;
            }());
            exports_1("Package", Package);
        }
    }
});
//# sourceMappingURL=package.js.map