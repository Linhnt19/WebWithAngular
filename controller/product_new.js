var apiUrl2 ="http://localhost:3000/product_new"
app.controller("ProductNew",function($scope,$http){
    $scope.listProductNew =[]
    $http.get(apiUrl2).then(function(res){
        $scope.listProductNew=res.data
        
    },function(res){
        alert("Loi du lieu")
    })
});
app.controller("spctCtrl2",function($scope,$http,$routeParams){
    $scope.id =$routeParams.id
    console.log($scope.id)
    $scope.productHot={}
    $http.get(apiUrl2+"/"+$scope.id).then(function(res){
        $scope.productHot =res.data
        console.log($scope.productHot)
    },function(){
        alert("Khong lay duoc")
    })
})