var app=angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl:"home.html",
        
    })
    .when("/chonSize",{
        templateUrl:"ChonSize.html"
    })
    .when("/khachVip",{
        templateUrl:"khachVip.html"
    })
    .when("/gioiThieu",{
        templateUrl:"GioiThieu.html"
    })
    .when("/gioHang",{
        templateUrl:"gioHang.html",
        controller:"gioHangCtrl"
    })
    .when("/tuyenDung",{
        templateUrl:"tuyenDung.html"
    })
    .when("/lienHe",{
        templateUrl:"LienHe.html"
    })
    .when("/addSP",{
        templateUrl:"formAddSP.html",
        // controller:"addSPCtrl"
    })
    .when("/updateSP/:id",{
        templateUrl:"formUpdateSP.html",
        // controller:"updateSPCtrl"
    })
    .when("/sanPhamHot/:id",{
        templateUrl:"sanPham.html",
        controller: "spctCtrl"
    })
    .when("/sanPhamNew/:id",{
        templateUrl:"sanPham.html",
        controller: "spctCtrl2"
    })
    
    .otherwise({
        redirectTo:"/home"
    })
})