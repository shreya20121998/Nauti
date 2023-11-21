sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator,FilterType) {
        "use strict";

        return Controller.extend("nauticalfe.controller.BidCont", {
            onInit: function () {
                let oView = this.getView();
                console.log(oView);
            },
            onPressBidTableData(oEvent) {
                const oItem = oEvent.getSource();
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteBidObj", {
                    bidObjPath: window.encodeURIComponent(oItem.getBindingContext("biddata").getPath().substr(1))
                });
            },
            closeTile : function(oEvent){
                console.log("clicked close");
                let oTable = this.getView().byId("biddingTableId");
                let oFilter = new sap.ui.model.Filter("Status", FilterOperator.Contains,"Closed");
                oTable.getBinding("items").filter(oFilter, FilterType.Application);
    
            },
            openTile : function(oEvent){
                console.log("clicked open");
                let oTable = this.getView().byId("biddingTableId");
                let oFilter = new sap.ui.model.Filter("Status", FilterOperator.Contains,"Open");
                oTable.getBinding("items").filter(oFilter, FilterType.Application);
    
            },
            ongoingTile : function(oEvent){
                console.log("clicked ongoing");
                let oTable = this.getView().byId("biddingTableId");
                let oFilter = new sap.ui.model.Filter("Status", FilterOperator.Contains,"Ongoing");
                oTable.getBinding("items").filter(oFilter, FilterType.Application);
    
            },
            allTile : function(oEvent){
                console.log("clicked all");
                let oTable = this.getView().byId("biddingTableId");
                let oFilter = new sap.ui.model.Filter("Status", FilterOperator,"all,Ongoing,Open,Closed");
                oTable.getBinding("items").filter(oFilter, FilterType.Application);
    
            }
        });
    });
