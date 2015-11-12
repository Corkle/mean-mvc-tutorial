var app = angular.module('meanApp',['ngMaterial']);
app.controller('todoCtrl', [function () {
	var ctrl = this;

	var Item = (function () {
		function Item(name) {
			this.name = name;
			this.completed = false;
		}
		return Item;
	})();

	this.todos = [new Item("One"), new Item("Two"), new Item("Three")];

	this.submit = function () {
		var item = new Item(ctrl.newItem);
		ctrl.todos.push(item)
		ctrl.newItem = "";
		ctrl.itemForm.$setPristine();
	}
}]);