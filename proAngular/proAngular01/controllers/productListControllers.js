/**
 * Created by g on 04/07/14.
 */
var ss = angular.module("sportStore");

ss.constant("productListActiveClass", "btn-primary");
ss.constant("productListPageCount", 3);

ss.controller("productListController", function (
        $scope,
        $filter,
        productListActiveClass,
        productListPageCount,
        cart
    ){
    var selectedCategory = null;
    $scope.selectedPage =1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory){
        selectedCategory = newCategory;
        $scope.selectedPage =1;
    };

    $scope.selectPage = function (newPage){
        $scope.selectedPage = newPage;
    };

    $scope.categoryFilterFn = function (product){
        return selectedCategory == null || product.category == selectedCategory;
    };

    $scope.getCategoryClass = function (category){
        return selectedCategory == category ? productListActiveClass : "";
    };

    $scope.getPageClass = function (page){
        return $scope.selectedPage == page ? productListActiveClass : "";
    };

    $scope.addProductToCart = function (product) {
        cart.addProduct(product.id, product.name, product.price);
    };
});