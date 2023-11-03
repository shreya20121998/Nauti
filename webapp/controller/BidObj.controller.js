sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nauticalfe.controller.BidObj", {
            onInit: function () {
                const oRouter = this.getOwnerComponent().getRouter();
			    oRouter.getRoute("RouteBidObj").attachPatternMatched(this.onObjectMatched, this);
            },
            onObjectMatched(oEvent) {
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").bidObjPath),
                    model: "biddata"
                });
            }
           
        });
    });
