// add git to this

$(function() {
  console.log('function ran');
  $("#runThisForMeId").bind("click", runThisForMe);
  $("#new_window").bind("click", openWindow);
  $("#doit").bind("click", doIt);
});

function openWindow(event) {
  var theNewWindow = window.open("http://www.thetruthaboutlawschool.com");
  $("#close_window").bind("click", function() { theNewWindow.close() });
}

var bkBootstrap = function(){

    /**** PUT YOUR PATH HERE ****/
    //var  dropboxPath = 'http://dl.dropbox.com/u/9610286/highlightbmljec.js';
    /**** DON'T EDIT BELOW HERE ****/
    
    var  head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement,
         tag = document.createElement('script');
    
    tag.async = true;
    tag.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js";
    tag.onload = function(){
        console.log('jquery loaded');
        //jQuery.getScript(dropboxPath);
        
        var searchArray = ['project',"%",'proceeds','charity','charities','discount','coupon','sweepstakes','raffle','drawing','percentage',' win ','opportunity to win','Krochet Kids','empower','marginalize','At risk','at-risk','Homeless','scholarship','AIDS','HIV','cancer','minecraft server','social network',' NGO','clinic','Guidelines','contest','competition','knife',' gun','weapon','energy drink','health','nutrition','property','beer','wine','alcohol','self-help','SEO','advertising','advertisement','startup','nonprofit','non-profit','awareness','syndrome','autism'];
        var targetTextArray = ['#body'];

        for (var i = 0; i < targetTextArray.length; i++)
        {
          var targetText = $(targetTextArray[i]).html();
      		console.log('OooooooooOOOO, I love Jared!');

          for (var j = 0; j < searchArray.length; j++)
          {
            var searchTerm = searchArray[j];
            var highlightStartTag = "<font style='color:black; background-color:#AFFACE;'>";
            var highlightEndTag = "</font>";
            var newText = "";
            var k = -1;
            var lcSearchTerm = searchTerm.toLowerCase();
            var lcTargetText = targetText.toLowerCase();

            while (targetText.length > 0)
              {
              k = lcTargetText.indexOf(lcSearchTerm, k+1);
              if (k < 0)
                {
                  newText += targetText;
                  targetText = "";
                } else
                {
                  if (targetText.lastIndexOf('>', k) >= targetText.lastIndexOf('<', k))
                    {
                      newText += targetText.substring(0, k) + highlightStartTag + targetText.substr(k, searchTerm.length) + highlightEndTag;
                      targetText = targetText.substr(k + searchTerm.length);
                      lcTargetText = targetText.toLowerCase();
                      k = -1;
                    }
                } //end else
              } //end while
            targetText = newText;

          } //end j loop
          $(targetTextArray[i]).html(targetText); // replace the text
        } //end i loop
    }
    head.insertBefore( tag, head.firstChild );
}

var script = function() {
  // http://jsfiddle.net/jaredcohe/QPQnZ/3/
  var searchArray = ['project',"%",'proceeds','charity','charities','discount','coupon','sweepstakes','raffle','drawing','percentage',' win ','opportunity to win','Krochet Kids','empower','marginalize','At risk','at-risk','Homeless','scholarship','AIDS','HIV','cancer','minecraft server','social network',' NGO','clinic','Guidelines','contest','competition','knife',' gun','weapon','energy drink','health','nutrition','property','beer','wine','alcohol','self-help','SEO','advertising','advertisement','startup','nonprofit','non-profit','awareness','syndrome','autism'];
  var targetTextArray = ['#body'];

  for (var i = 0; i < targetTextArray.length; i++)
  {
    var targetText = $(targetTextArray[i]).html();
		console.log('OooooooooOOOO, I love Jared!');

    for (var j = 0; j < searchArray.length; j++)
    {
      var searchTerm = searchArray[j];
      var highlightStartTag = "<font style='color:black; background-color:#AFFACE;'>";
      var highlightEndTag = "</font>";
      var newText = "";
      var k = -1;
      var lcSearchTerm = searchTerm.toLowerCase();
      var lcTargetText = targetText.toLowerCase();

      while (targetText.length > 0)
        {
        k = lcTargetText.indexOf(lcSearchTerm, k+1);
        if (k < 0)
          {
            newText += targetText;
            targetText = "";
          } else
          {
            if (targetText.lastIndexOf('>', k) >= targetText.lastIndexOf('<', k))
              {
                newText += targetText.substring(0, k) + highlightStartTag + targetText.substr(k, searchTerm.length) + highlightEndTag;
                targetText = targetText.substr(k + searchTerm.length);
                lcTargetText = targetText.toLowerCase();
                k = -1;
              }
          } //end else
        } //end while
      targetText = newText;

    } //end j loop
    $(targetTextArray[i]).html(targetText); // replace the text
  } //end i loop
};

function doIt(event) {
  var link = document.getElementById('bk-trigger');
  var linkString = 'javascript:(' + encodeURIComponent(bkBootstrap.toString()) + ')()'
  link.href = 'javascript:(' + encodeURIComponent(bkBootstrap.toString()) + ')()'
  console.log("HI");
  console.log(linkString);
  console.log(encodeURIComponent(script.toString()));
}


function runThisForMe(event) {

  console.log("hihi");

    /**** PUT YOUR PATH HERE ****/
    //var  dropboxPath = 'http://dl.dropbox.com/u/9610286/highlightbmljec.js';
    /**** DON'T EDIT BELOW HERE ****/
    
    var  head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement,
         tag = document.createElement('script');
    
    tag.async = true;
    tag.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js";
    tag.onload = function(){
        console.log('jquery loaded');
        //jQuery.getScript(dropboxPath);
        
        var searchArray = ['project',"%",'proceeds','charity','charities','discount','coupon','sweepstakes','raffle','drawing','percentage',' win ','opportunity to win','Krochet Kids','empower','marginalize','At risk','at-risk','Homeless','scholarship','AIDS','HIV','cancer','minecraft server','social network',' NGO','clinic','Guidelines','contest','competition','knife',' gun','weapon','energy drink','health','nutrition','property','beer','wine','alcohol','self-help','SEO','advertising','advertisement','startup','nonprofit','non-profit','awareness','syndrome','autism'];
        var targetTextArray = ['#body'];

        for (var i = 0; i < targetTextArray.length; i++)
        {
          var targetText = $(targetTextArray[i]).html();
      		console.log('OooooooooOOOO, I love Jared!');

          for (var j = 0; j < searchArray.length; j++)
          {
            var searchTerm = searchArray[j];
            var highlightStartTag = "<font style='color:black; background-color:#AFFACE;'>";
            var highlightEndTag = "</font>";
            var newText = "";
            var k = -1;
            var lcSearchTerm = searchTerm.toLowerCase();
            var lcTargetText = targetText.toLowerCase();

            while (targetText.length > 0)
              {
              k = lcTargetText.indexOf(lcSearchTerm, k+1);
              if (k < 0)
                {
                  newText += targetText;
                  targetText = "";
                } else
                {
                  if (targetText.lastIndexOf('>', k) >= targetText.lastIndexOf('<', k))
                    {
                      newText += targetText.substring(0, k) + highlightStartTag + targetText.substr(k, searchTerm.length) + highlightEndTag;
                      targetText = targetText.substr(k + searchTerm.length);
                      lcTargetText = targetText.toLowerCase();
                      k = -1;
                    }
                } //end else
              } //end while
            targetText = newText;

          } //end j loop
          $(targetTextArray[i]).html(targetText); // replace the text
        } //end i loop
    }
    head.insertBefore( tag, head.firstChild );
}

