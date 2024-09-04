var apiUrl = "http://localhost:3000/product_hot"
app.controller("ProductHot", function ($scope, $http) {
    $scope.listProductHot = []
    $http.get(apiUrl).then(function (res) {
        $scope.listProductHot = res.data

    }, function (res) {
        alert("Loi du lieu")
    })
    $scope.deleteBtn = function (id) {
        $http.delete(apiUrl + "/" + id).then(function () {
            alert("Xoa thanh cong")
            return document.location = "#!home"
        }, function () {
            alert("Xoa khong thanh cong")
        })
    }
});
// add sp
app.controller("addSPCtrl", function ($scope, $http) {
    $scope.id = "",
        $scope.img = "",
        $scope.name = "",
        $scope.price = "",
        $scope.gener = "",
        $scope.quantity = "",
        $scope.sale = ""
    $scope.addSP = function () {
        $http.post(apiUrl, {
            "id": $scope.id,
            "img": $scope.img,
            "name": $scope.name,
            "price": $scope.price,
            "gener": $scope.gener,
            "quantity": $scope.quantity,
            "sale": $scope.sale
        }).then(function (res) {
            alert("Them thanh cong")
        }, function () {
            alert("Them khong thanh cong")
        })
    }
})
// updateSP
app.controller("updateSPCtrl", function ($scope, $http, $routeParams) {
    $scope.id = $routeParams.id
    console.log($scope.id)
    $scope.productHot = {}
    $http.get(apiUrl + "/" + $scope.id).then(function (res) {
        $scope.productHot = res.data
        console.log($scope.productHot)
    }, function () {
        alert("Khong lay duoc")
    })
    $scope.updateSP = function () {
        $http.put(apiUrl + "/" + $scope.id, {
            "img": $scope.productHot.img,
            "name": $scope.productHot.name,
            "gener": $scope.productHot.gener,
            "quantity": $scope.productHot.quantity,
            "price": $scope.productHot.price,
            "sale": $scope.productHot.sale
        }).then(function(res){
            alert("Update thanh cong")
        },function(){
            alert("Update khong thanh cong")
        })
    }
})
// san pham ct
app.controller("spctCtrl", function ($scope, $http, $routeParams) {
    $scope.id = $routeParams.id
    console.log($scope.id)
    $scope.productHot = {}
    $http.get(apiUrl + "/" + $scope.id).then(function (res) {
        $scope.productHot = res.data
        console.log($scope.productHot)
    }, function () {
        alert("Khong lay duoc")
    })

    // them vao gio hang
    
    // $scope.quantity2 = parseFloat($scope.slMua);
    
    $scope.slMua =1
    $scope.addGioHang = function () {
        
        $http.post(apiUrl4 , {
            "img": $scope.productHot.img,
            "name": $scope.productHot.name,
            "price": $scope.productHot.price,
            "quantity": $scope.slMua

        }).then(function (res) {
            alert("Thêm thành công vào giỏ hàng")
            return document.location = "#!gioHang"
        }, function () {
            alert("Thêm ko thanh cong")
        })
        
        var slCon = parseFloat($scope.bookOJ.quantity-$scope.slMua)
        $http.put(apiUrl + "/" + $scope.id, {     
            "quantity": slCon,
            

        }).then(function(res){
            $scope.productHot = res.data
        })
    }
})

