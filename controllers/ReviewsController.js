nicksFlicks.controller('ReviewsCtrl', function ReviewersCtrl($scope, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

//sets the selected review to false
  $scope.selectReview = function(review) {
    review.selected = true;
  };

});
