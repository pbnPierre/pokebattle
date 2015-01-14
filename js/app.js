String.prototype.ucfirst = function()
{
    return this.charAt(0).toUpperCase() + this.substr(1);
};
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find a été appelé sur null ou undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate doit être une fonction');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

var PokebattleApp = angular.module('Pokebattle.app', ['ngRoute']);

PokebattleApp.config(function ($routeProvider) {
    $routeProvider.when(
        '/',
        {templateUrl: 'view/Pokebattle.html',    controller: 'WeaknessAndStrengthController'}
    );
    $routeProvider.otherwise({redirectTo: '/'});
});

PokebattleApp.controller('WeaknessAndStrengthController', ['$scope', function ($scope)
{
    $scope.types = {
        primary: undefined,
        secondary: undefined
    };
    $scope.elements = elementDefinitions;

    $scope.calculate = function(){
        $scope.initialize();

        if ($scope.types.primary != undefined)
        {
            $scope.calculateElements($scope.types.primary, $scope.types.secondary);
        }

        $scope.$apply();
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

    $scope.calculateFromPokemonName = function(){
        if ($scope.pokemon !== undefined)
        {
            var apiBase = 'http://pokeapi.co/';

            jQuery.getJSON(
                apiBase + 'api/v1/pokedex/1/',
                function(data)
                {
                    var sortFunction = function(element, index, array){
                        return (element.name == $scope.pokemon.toLowerCase());
                    };

                    var pokemon = data.pokemon.find(sortFunction);
                    if (pokemon != undefined)
                    {
                        var ressourceUrl = apiBase + pokemon.resource_uri;

                        jQuery.getJSON(
                            ressourceUrl,
                            function(data){
                                $scope.selectPrimary(data.types[0].name.ucfirst());

                                if (data.types[1] != undefined)
                                {
                                    $scope.selectSecondary(data.types[1].name.ucfirst());
                                }
                                else
                                {
                                    $scope.removeSecondary();
                                }
                            }
                        ).error(function(){
                            alert('Pokeapi is not available');
                        });
                    }
                    else
                    {
                        alert( $scope.pokemon + ' is not a real pokemon');
                    }
                }
            ).error(function(){
                alert('Pokeapi is not available');
            });
        }
    };
}]);

PokebattleApp.run();