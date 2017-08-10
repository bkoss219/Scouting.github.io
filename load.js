angular.module('LoadApp',[])
.controller('LoadController', function($scope) {
    var loadData = this;
    var init = function() {
        loadData.TeamNumber = localStorage.getItem("TeamNumber");
        loadData.MatchNumber = localStorage.getItem("MatchNumber");
        loadData.MatchColor = localStorage.getItem("MatchColor");
        loadData.LGS = localStorage.getItem("LGS");
        loadData.LGM = localStorage.getItem("LGM");
        loadData.HGS = localStorage.getItem("HGS");
        loadData.HGM = localStorage.getItem("HGM");
        loadData.GS = localStorage.getItem("GS");
        loadData.GD = localStorage.getItem("GD");
        loadData.RS = localStorage.getItem("RS");
        loadData.RD = localStorage.getItem("RD");
        loadData.C = localStorage.getItem("C");
        loadData.AS = localStorage.getItem("AS");
        loadData.ADP = localStorage.getItem("ADP");
        loadData.DT = localStorage.getItem("DT");
        loadData.GG = localStorage.getItem("GG");
        loadData.H = localStorage.getItem("H");
    }
    init();
    loadData.loadSubmit = function() {
        if($scope.LGS){
            localStorage.setItem("LGS", $scope.LGS);
        }
        if($scope.LGM){
            localStorage.setItem("LGM", $scope.LGM);
        }
        if($scope.HGS){
            localStorage.setItem("HGS", $scope.HGS);
        }
        if($scope.HGM){
            localStorage.setItem("HGM", $scope.HGM);
        }
        if($scope.GS){
            localStorage.setItem("GS", $scope.GS);
        }
        if($scope.GD){
            localStorage.setItem("GD", $scope.GD);
        }
        if($scope.RS){
            localStorage.setItem("RS", $scope.RS);
        }
        if($scope.RD){
            localStorage.setItem("RD", $scope.RD);
        }
        if($scope.C){
            localStorage.setItem("C", $scope.C);
        }
        if($scope.AS){
            localStorage.setItem("AS", $scope.AS);
        }
        if($scope.ADP){
            localStorage.setItem("ADP", $scope.ADP);
        }
        if($scope.DT){
            localStorage.setItem("DT", $scope.DT);
        }
        if($scope.GG){
            localStorage.setItem("GG", $scope.GG);
        }
        if($scope.H){
            localStorage.setItem("H", $scope.H);
        }
    };
});