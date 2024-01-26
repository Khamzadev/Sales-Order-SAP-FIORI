/*global QUnit*/

sap.ui.define([
	"salesorder02/controller/SalesOrderInfo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SalesOrderInfo Controller");

	QUnit.test("I should test the SalesOrderInfo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
