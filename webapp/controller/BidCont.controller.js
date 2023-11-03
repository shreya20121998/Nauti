sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nauticalfe.controller.BidCont", {
            onInit: function () {

            },
           
            // onPressBiddingTableCelss: function() {
            //     const oRouter = this.getOwnerComponent().getRouter();
            //     oRouter.navTo("RouteBiddingControllerObjectPage");
            // }
            onPressBidTableData(oEvent) {
                const oItem = oEvent.getSource();
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteBidObj", {
                    bidObjPath: window.encodeURIComponent(oItem.getBindingContext("biddata").getPath().substr(1))
                });
            }
        });
    });
