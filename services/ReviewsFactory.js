nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {}
  factory.reviews = [ { title : "Come Drink with Me", reviewText : "Come Drink with Me is a 1966 Hong Kong wuxia film directed by King Hu. Set during the Ming Dynasty, it stars Cheng Pei-pei and Yueh Hua as warriors with Chan Hung-lit as the villain, and features action choreography by Han Ying-chieh. It is widely considered one of the best Hong Kong films ever made.", selected : false },
                      { title : "Princess Iron Fan", reviewText : "Princess Iron Fan (鐵扇公主, Tie shan gong zhu) is a 1966 Hong Kong film, the second in a series of four Shaw Brothers productions (1966–1968) based on the novel Journey to the West. It was directed by Ho Meng Hua.", selected : false },
                      { title : "One-Armed Swordsman", reviewText : "One-Armed Swordsman is a 1967 Hong Kong wuxia film produced by the Shaw Brothers Studio. Directed by Chang Cheh, it was the first of the new style of wuxia films emphasizing male anti-heroes, violent swordplay and heavy bloodletting. It was the first Hong Kong film to make HK$1 million at the local box office, propelling its star Jimmy Wang to super stardom.", selected : false },
                      { title : "The Fastest Sword", reviewText : "The Fastest Sword (天下第一劍) is a 1968 Shaw Brothers wu xia film directed and written by Pan Lei and starring Liu Ping as the eponymous 'Fastest Sword', a possibly unbeatable sword fighter. It is noted for comparisons drawn between it and the Hollywood Western The Gunfighter although such comparisons are exaggerated,[1] its cinematography which is atypical for Hong Kong fight scenes of the time,[2] and a dramatic final fight scene.", selected : false },
                      { title : "Have Sword, Will Travel", reviewText : "Have Sword, Will Travel is a 1969 Hong Kong wuxia film directed by Chang Cheh and starring Ti Lung, David Chiang and Lee Ching.", selected : false },
                      { title : "Blood Brothers", reviewText : "Blood Brothers (Traditional: 刺馬; Simplified: 刺马; Pinyin: Cì Mǎ) is a 1973 Shaw Brothers kung fu film directed by Chang Cheh, with action choreography by Lau Kar Leung, and starring David Chiang and Ti Lung. It was released as Chinese Vengeance in the UK and Australia, and Dynasty of Blood in North America. The films is a fictional story based on the assassination of Ma Xinyi.", selected : false },
                      { title : "Five Shaolin Masters", reviewText : "5 Shaolin Masters aka 5 Masters Of Death is a 1974 Shaw Brothers kung fu film directed by Chang Cheh, with action choreography by Lau Kar Leung and Lau Kar Wing. The film focuses on Shaolin's historic rivalries with the Qing Dynasty.", selected : false }];

  factory.addReview = function() {
    factory.reviews.push({ title : factory.title, reviewText : factory.reviewText, selected : false });
    factory.title = null;
    factory.reviewText = null;
  };

  return factory;
});
