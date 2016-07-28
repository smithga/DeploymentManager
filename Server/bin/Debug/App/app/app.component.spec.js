System.register(['./app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('app component', function () {
                it('Returns correct name', function () {
                    var cpnt = new app_component_1.AppComponent();
                    var result = cpnt.pageTitle();
                    expect(result).toEqual("Starter files for Angular2: Getting Started.");
                });
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map