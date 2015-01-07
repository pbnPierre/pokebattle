var PokebattleApp = angular.module('Pokebattle.app', ['ngRoute']);

PokebattleApp.config(function ($routeProvider) {
    $routeProvider.when('/',           {templateUrl: 'view/Pokebattle.html',    controller: 'WeaknessAndStrengthController'});
    $routeProvider.otherwise({redirectTo: '/'});
});

PokebattleApp.run(function ($rootScope) {});

PokebattleApp.controller('WeaknessAndStrengthController', ['$scope', function ($scope) {
    $scope.calculate = function(){
        $scope.initialize();
        if ($scope.types.primary != undefined)
        {
            $scope.calculateElements($scope.types.primary, $scope.types.secondary);
        }
    };

    $scope.selectPrimary = function(name)
    {
        $scope.types.primary = name;
        $scope.calculate();
    }
    $scope.removePrimary = function()
    {
        $scope.types.primary = undefined;
        $scope.calculate();
    };
    $scope.selectSecondary = function(name)
    {
        $scope.types.secondary = name;
        $scope.calculate();
    }
    $scope.removeSecondary = function()
    {
        $scope.types.secondary = undefined;
        $scope.calculate();
    };

    $scope.print = function() {
        window.print();
    }

    $scope.initialize = function(){
        $scope.effects = {
            'doesnotaffect': [],
            'notveryeffectiveatall': [],
            'notveryeffective': [],
            'normal': [],
            'veryeffective': [],
            'supereffective': []
        }
    };

    $scope.calculateElements = function(primary, secondary)
    {
        if (primary != undefined)
        {
            jQuery.each($scope.elements, function(index, element)
            {
                var strength = element.effects[primary];
                if (secondary != undefined)
                {
                    strength = strength * element.effects[secondary];
                }

                if (strength == 0)
                {
                    $scope.effects.doesnotaffect.push(element);
                }
                else if (strength == 4)
                {
                    $scope.effects.supereffective.push(element);
                }
                else if (strength == 2)
                {
                    $scope.effects.veryeffective.push(element);
                }
                else if (strength == 0.5)
                {
                    $scope.effects.notveryeffective.push(element);
                }
                else if (strength ==0.25)
                {
                    $scope.effects.notveryeffectiveatall.push(element);
                }
                else
                {
                    $scope.effects.normal.push(element);
                }
            });
        }
    }

    $scope.types = {
        primary: undefined,
        secondary: undefined
    };

    $scope.elements = elementDefinitions;
    $scope.calculate();
}]);