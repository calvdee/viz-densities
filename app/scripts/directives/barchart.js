'use strict';

/**
 * @ngdoc directive
 * @name densitiesApp.directive:barChart
 * @description
 * # barChart
 */
angular.module('densitiesApp')
  .directive('barChart', function (d3) {
    var chart = d3.custom.density();
	return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart"></div>',
        scope:{
            height: '=height',
            data: '=data',
            hovered: '&hovered'
        },
        link: function(scope, element, attrs) {
            var chartEl = d3.select(element[0]);
            chart.on('customHover', function(d, i){
                scope.hovered({args:d});
            });

            scope.$watch('data', function (newVal, oldVal) {
                chartEl.datum(newVal).call(chart);
            });

            scope.$watch('height', function(d, i){
                chartEl.call(chart.height(scope.height));
            })
        }
    };
  });
