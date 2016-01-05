angular.module('powerIce.goose', ['ngRoute'])

.controller('GooseController', function ($scope) {
    var vm = this;
    vm.teachings=instructions;
  });

  var instructions = [
    {step: "study the goose"},
    {step: "embrace the goose"},
    {step: "become the goose"}
  ];