var apiUrl3 ="http://localhost:3000/product_sel"
app.controller("ProductSel",function($scope,$http){
    $scope.listProductSel =[]
    $http.get(apiUrl3).then(function(res){
        $scope.listProductSel=res.data
        
    },function(res){
        alert("Loi du lieu")
    })
})