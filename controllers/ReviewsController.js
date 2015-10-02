nicksFlicks.controller('ReviewsCtrl', function ReviewersCtrl($scope, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;
});
