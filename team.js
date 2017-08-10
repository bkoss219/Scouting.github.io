angular.module('TeamApp', [])
.controller('TeamController', function($scope) {
    var team = this;
    var init = function() {
        $scope.TeamNumber = localStorage.getItem("TeamNumber");
        $scope.MatchNumber = localStorage.getItem("")
    }
    init();
    $scope.comp = {name:"Scrimmage",year:2017};
    team.dat = function(){
        localStorage.setItem("TeamNumber", $scope.TeamNumber);
        localStorage.setItem("MatchNumber", $scope.MatchNumber);
        localStorage.setItem("MatchColor", $scope.TeamColor);
    }
});