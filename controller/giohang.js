var apiUrl4 ="http://localhost:3000/gioHang"

app.controller("gioHangCtrl",function($scope,$http){
    $scope.listgioHang =[]
    $http.get(apiUrl4).then(function(res){
        $scope.listgioHang=res.data
        console.log($scope.listgioHang)
    },function(res){
        alert("Loi du lieu")
    })
    $scope.deleteBtn = function (id) {
        $http.delete(apiUrl4 + "/" + id).then(function () {
            alert("Xoa thanh cong")
            return document.location = "#!gioHang"
        }, function () {
            alert("Xoa khong thanh cong")
        })
    }
});
