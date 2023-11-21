sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nauticalfe.controller.View1", {
            onInit: function () {

            },
            
            onPress: function() {
                console.log("click");
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");
            },
            onPress2: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteBidCont");
            },
            onPress3: function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Routedash")
            }
        });
    });
