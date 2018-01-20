
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ' , ' + city;
    // YOUR CODE GOES HERE!
    
    var streetViewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + '';
    $('#googleSteetView').attr('src', streetViewUrl);
    var ntUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest&api-key=d9ad768cc25d4d2984b2ffc01cb4c12e';
    $nytHeaderElem.text('New York Times Articles About ' + city );
    $.getJSON(ntUrl, function(data){
        var articles = data.response.docs;
        for(var i = 0; i < articles.length; i++){
            var article = articles[i];
            var el = '<li class="article"><h5 class="mb-3 dark-grey-text">' + article.headline.main + '</h5><p class="grey-text">' + article.snippet  + '</p><a class="btn btn-primary btn-md waves-effect waves-light" href="' + article.web_url  + '">Read more</a></li>';
            $nytElem.append(el);
        }
    }).error(function(err){
      var el  = "<p>There is a error happen. Please try after sometime.</p>";
      $nytElem.append(el);
    });
    return false;
}; 

$('#form-container').submit(loadData);
