'use strict';

angular.module('crudApp').controller('HomeController',
    [ '$scope', '$state', '$http', '$q', 'urls',  function(  $scope, $state, $http, $q, urls) {

    	$scope.goPersonal = function() {
    		$state.go('personal');
    	}
    	
    	$scope.goFinal = function() {
    		$state.go('final');
    	}
    	
    	$scope.goBusiness = function() {
    		$state.go('business');
    	}
    	
    	$scope.retrieveInformation = function() {
    		$scope.data = {};
    		$scope.data.keywords = "Beverage company";
    		$scope.data.category = "Workplace & Office";
    		$scope.data.additionalService = "No";
    		$scope.data.locations = "3";
    		$scope.data.employees = "300";
    		
    		fetchData($scope.crawlUrl).then(function(response) {
    			alert("social media data fetched properly");
    			console.log(response);
    		}, function(error) {
    			alert("social media data fetched properly");
    			
    			console.log(error);
    		});
    	}
    	
    	function fetchData(url) {
            var deferred = $q.defer();
            $http.post(urls.CRAWL_SERVICE_API, url)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                       deferred.reject(errResponse);
                    }
                );
            return deferred.promise;
        }
    	
    	var data = {"id":"40796308305","metadata":null,"type":null,"name":"Coca-Cola","category":"Workplace & Office","picture":{"url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14680612_10155488324368306_295421251789586235_n.png?oh=e138a058cff4435b90f153e3dcd709f4&oe=59E4B606","isSilhouette":false,"height":null,"width":null},"adminNotes":[],"affiliation":null,"appId":null,"artistsWeLike":null,"assetScore":null,"attire":null,"awards":null,"bandInterests":null,"bandMembers":null,"bestPage":null,"contactAddress":null,"countryPageLikes":null,"bio":null,"birthday":null,"built":null,"business":null,"culinaryTeam":null,"currentLocation":null,"features":null,"globalBrandPageName":"Coca-Cola","globalBrandRootId":"1542920115951985","globalBrandParentPage":null,"hasAddedApp":null,"hometown":null,"hours":null,"impressum":null,"influences":null,"isPermanentlyClosed":null,"labels":[],"ownerBusiness":null,"personalInfo":null,"paymentOptions":null,"personalInterests":null,"pharmaSafetyInfo":null,"placeType":null,"plotOutline":null,"priceRange":null,"producedBy":null,"promotionEligible":null,"promotionIneligibleReason":null,"publicTransit":null,"recordLabel":null,"releaseDate":null,"restaurantServices":null,"restaurantSpecialties":null,"genre":null,"mpg":null,"network":null,"newLikeCount":null,"offerEligible":null,"schedule":null,"screenplayBy":null,"season":null,"singleLineAddress":null,"starring":null,"startInfo":null,"storeNumber":null,"studio":null,"engagement":null,"unreadMessageCount":null,"unreadNotifCount":null,"unseenMessageCount":null,"members":null,"wereHereCount":null,"featuredVideo":null,"verificationStatus":null,"voipInfo":null,"writtenBy":null,"link":"https://www.facebook.com/Coca-Cola/","username":null,"founded":null,"companyOverview":null,"mission":null,"products":null,"leadgenTosAccepted":null,"likesCount":null,"likes":null,"fanCount":null,"isAlwaysOpen":null,"isCommunityPage":null,"description":"Created in 1886 in Atlanta, Georgia, by Dr. John S. Pemberton, Coca-Cola was first offered as a fountain beverage at Jacob's Pharmacy by mixing Coca-Cola syrup with carbonated water. \n\nCoca-Cola was patented in 1887, registered as a trademark in 1893 and by 1895 it was being sold in every state and territory in the United States. In 1899, The Coca-Cola Company began franchised bottling operations in the United States. \n\nCoca-Cola might owe its origins to the United States, but its popularity has made it truly universal. Today, you can find Coca-Cola in virtually every part of the world.\n\nCoca-Cola Page House Rules: http://CokeURL.com/q28a","descriptionHtml":null,"checkins":null,"phone":null,"accessToken":null,"about":"The Coca-Cola Facebook Page is a collection of your stories showing how people from around the world have helped make Coke into what it is today.","talkingAboutCount":null,"canCheckin":null,"canPost":null,"isPublished":null,"isUnclaimed":null,"isVerified":null,"isWebhooksSubscribed":null,"directedBy":null,"displaySubtext":null,"generalManager":null,"generalInfo":null,"location":null,"cover":null,"website":"http://www.coca-cola.com","nameWithLocationDescriptor":null,"bookingAgent":null,"pressContact":null,"lastUsedTime":null,"categoryList":[],"emails":[],"foodStyles":[]};
    }


    ]);