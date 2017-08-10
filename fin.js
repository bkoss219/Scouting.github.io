angular.module('FinApp',[])
.controller('FinController',function($scope){
    var finData = this;
    var init = function() {
        finData.TeamNumber = localStorage.getItem("TeamNumber");
        finData.MatchNumber = localStorage.getItem("MatchNumber");
        finData.MatchColor = localStorage.getItem("MatchColor");
        finData.LGS = localStorage.getItem("LGS");
        finData.LGM = localStorage.getItem("LGM");
        finData.HGS = localStorage.getItem("HGS");
        finData.HGM = localStorage.getItem("HGM");
        finData.GS = localStorage.getItem("GS");
        finData.GD = localStorage.getItem("GD");
        /*finData.RS = localStorage.getItem("RS");
        finData.RD = localStorage.getItem("RD");*/
        if(localStorage.getItem("RS") == 1){
            finData.RS = "True";
        } else {
            finData.RS = "False";
        }
        if(localStorage.getItem("RD") == 1){
            finData.RD = "True";
        } else {
            finData.RD = "False";
        }
        finData.C = localStorage.getItem("C");
        finData.AS = localStorage.getItem("AS");
        finData.ADP = localStorage.getItem("ADP");
        finData.DT = localStorage.getItem("DT");
        //finData.GG = localStorage.getItem("GG");
        if(localStorage.getItem("GG") == 1){
            finData.GG = "True";
        } else {
            finData.GG = "False";
        }
        finData.H = localStorage.getItem("H");
    }
    init();
});