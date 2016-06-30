BoilerPlate.service('ExampleCachingService', function(){
   
    //A simple service to allow for caching of data that
    //might not need to be fetched from the server on each
    //loading of a controller.
    
    //customize as needed.
    
    var cachedThumnails = [];
    var cachedFullSizeData = [];
    var currentMedia = null;


    this.getCurrentMedia = function() {
    	return [currentMedia, index];
    };

    this.setCurrentMedia = function(mediaData, mediaIndex) {
    	currentMedia = mediaData;
    	index = mediaIndex;
    };

    this.getCachedThumbnails = function() {
       return cachedThumnails;
    };

    this.setCachedThumbnails = function(thumbnails) {
        cachedThumnails = thumbnails;
    };

    this.getAllCachedFullSizeData = function() {
    	return cachedFullSizeData;
    };

    this.getCachedFullSizeAtIndex = function(index) {
    	if(cachedFullSizeData[index]) {
    		return cachedFullSizeData[index];
    	} else {
    		return null;
    	}
    };

    this.setFullSizeCacheAtIndex = function(updatedData, index) {
    	cachedFullSizeData[index] = updatedData;
    };
});