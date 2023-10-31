sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/IconPool",
	"sap/m/Dialog",
    "sap/m/Table",
	"sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Dialog,Table, Text,ColumnListItem) {
        "use strict";
       

        return Controller.extend("nauticalfe.controller.View2", {
            onInit: function () {
                var oView = this.getView();

                // Button event handlers
                // oView.byId("_IDGenButton1").attachPress(function () {
                //     //alert("Create Voyage button clicked!");

                // });

                var inputVoyageType = oView.byId("_IDGenInput2");
               
            },
            onCreateVoyage: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView3");
            },
            // populateInputField: function (inputField, selectedValue) {
            //     inputField.setValue(selectedValue);
            // },
            showValueHelpDialog1: function () {
                // Create a dialog
                var oDialog = new sap.m.Dialog({
                    title: "Select: Voyage Types",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Voyage Type" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Description" }),
                            }),
                        ],
                        items: [
                            new sap.m.ColumnListItem({
                                cells: [
                                    new sap.m.Text({ text: "1001" }),
                                    new sap.m.Text({ text: "Voyage Charter" }),
                                ],
                            }),
                            new sap.m.ColumnListItem({
                                cells: [
                                    new sap.m.Text({ text: "1002" }),
                                    new sap.m.Text({ text: "Time Charter" }),
                                ],
                            }),
                            // Add more ColumnListItems as needed
                        ],
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("_IDGenInput2"); // Input field for Voyage Type
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Close",
                        press: function () {
                            oDialog.close();
                        },
                    }),
                });
            
                // Bind the dialog to the view
                this.getView().addDependent(oDialog);
            
                // Open the dialog
                oDialog.open();
            },
            populateInputField: function (inputField, selectedValue) {
                inputField.setValue(selectedValue);
            },
            
                
        });
});
