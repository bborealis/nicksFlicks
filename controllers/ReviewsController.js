nicksFlicks.controller('ReviewsCtrl', function ReviewersCtrl($scope, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;



  $scope.selectReview = function(review) {
    review.selected = !review.selected;

    console.log(review.selected);
  };

  $scope.unselectReview = function(review) {
    review.selected = false;
    console.log(review.selected);
  };

});
