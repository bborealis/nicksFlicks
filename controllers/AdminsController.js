nicksFlicks.controller('AdminsCtrl', function AdminsCtrl($scope, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;
});
