System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Agent;
    return {
        setters:[],
        execute: function() {
            Agent = (function () {
                function Agent(id, name, port, ip) {
                    this.id = id;
                    this.name = name;
                    this.port = port;
                    this.ip = ip;
                }
                return Agent;
            }());
            exports_1("Agent", Agent);
        }
    }
});
//# sourceMappingURL=agent.js.map