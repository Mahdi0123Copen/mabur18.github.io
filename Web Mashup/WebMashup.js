//Pixabay API from https://pixabay.com/api/docs/

    const img_request = 'https://pixabay.com/api/?key=21067592-0dbd98aa0f8f2fe6305d65e61&q=desert&image_type=photo';
    console.log(img_request);

    async function getData_img() {
        const response = await fetch(img_request); //fetch data from YouTube API and when its received save in constant response
        const results = await response.json();
        $('ul.img_list').append('</br></br>');
        for(idx = 0; idx<5; idx++) { //loop to display each result
            $('ul.img_list').append('<li style="display:inline "><img id="y" width="250" height="150" src="' + results.hits[idx].webformatURL  +'"frameborder="1" allowfullscreen></img> </li>');
        };
    }
    getData_img();


    //Youtube API from https://developers.google.com/youtube/v3

    const YT_url = 'https://www.googleapis.com/youtube/v3/search?'; //endpoint
    const YT_params = 'part=snippet&maxResults=4&q=';
    const YT_topic = 'Desertification';
    const YT_key = '&key=AIzaSyA-SHHSTswvgW5fOKsooaGBkq-LG2r8sPU';
    
    const youtube_request = YT_url + YT_params + YT_topic + YT_key;
    console.log(youtube_request);

    async function getData_YT() {
        const response = await fetch(youtube_request); //fetch data from YouTube API and when its received save in constant response
        const results = await response.json();
        $('ul.video_list').append('</br></br>');
        $.each(results.items, function (idx, item) { //loop to display each result
            $('ul.video_list').append('<li style="display:inline"><iframe id="y" width="275" height="200" src="https://www.youtube.com/embed/' + results.items[idx].id.videoId + '?controls=0&showinfo=1"frameborder="1" allowfullscreen></iframe> </li>');
        });
    }
    //We call the function we just created so its executed.
    getData_YT();

    //Infoboxes from https://en.wikipedia.org/wiki/Help:Infobox

    // example of queries, you can also implement a search input
    var IB_topic="sahara";
    // HTTP request retrieved the infobox information for example from  https://en.wikipedia.org/wiki/Barack_Obama
    var url="https://en.wikipedia.org/w/api.php?action=parse&format=json&page="+IB_topic+"&redirects&prop=text&callback=?";
    console.log(url);
    // using the .getJSON() function to parse the response
    $.getJSON(url, function (data){
      var rawtext = data.parse.text["*"]; //placing data text on variable to be used on string replacement below
      // Next line uses regular expressions to replave local href to global href so the links in the infobox work properly
      // NOTE this is made to work with English, if you use a different language you need to change the global address
      rawtext = rawtext.replace(new RegExp('href="/wiki', 'g'), 'href="https://en.wikipedia.org/wiki'); //wikipedia links
      wikiHTML = rawtext.replace(new RegExp('"//upload.', 'g'), '"https://upload.'); //wikimedia pictures
      $wikiDOM = $("<document>"+wikiHTML+"</document>");
      $("div.infoBox").append($wikiDOM.find('.infobox').html()); //Using DOM to insert the content on a given class
    });

    //OMDB from OMDBAPI.com

    const OMDB_request = 'https://www.omdbapi.com/?s=desert&apikey=478fe61f';
    console.log(OMDB_request);

    async function getData_OMDB() {
        const response = await fetch(OMDB_request); //fetch data from YouTube API and when its received save in constant response
        const results = await response.json();
        $('ul.movie_list').append('</br></br>');
        for(idx = 0; idx<5; idx++) { //loop to display each result
            if(results.Search[idx].Poster == "N/A"){
                results.Search[idx].Poster=""
                results.Search[idx].Title=""
            }
            $('ul.movie_list').append('<li style="display:inline"><img height="200" width:"250" src="' + results.Search[idx].Poster + '" alt=""/><p>'+results.Search[idx].Title+'</p></li>');
        };
    }
    //We call the function we just created so its executed.
    getData_OMDB();

    //Open Book Libary from Openlibrary.org
    
    const OBL_request = 'https://openlibrary.org/search.json?q=desertification';
    console.log(OBL_request);

    async function getData_OBL() {
        const response = await fetch(OBL_request); //fetch data from YouTube API and when its received save in constant response
        const results = await response.json();
        $('ul.OBL_list').append('</br></br>');
        for(idx = 55; idx<60; idx++) { //loop to display each result
            $('ul.OBL_list').append('<li style="display:inline"><img height="150" src="https://covers.openlibrary.org/b/id/'+results.docs[idx].cover_i+'-M.jpg"/><p>'+results.docs[idx].title+'</p><p>by '+results.docs[idx].author_name+'</p></li>');
        };
    }
    //We call the function we just created so its executed.
    getData_OBL();

    //Google Books from www.googleapis.com


    const gBook_request = 'https://www.googleapis.com/books/v1/volumes?q=exhausted+soil+inauthor:keyes&key=AIzaSyA-SHHSTswvgW5fOKsooaGBkq-LG2r8sPU';
    //display on the console the full API request to make sure you did everything right
    console.log(gBook_request);

    async function getData_gBook() {
        const response = await fetch(gBook_request); //fetch data from YouTube API and when its received save in constant response
        const results = await response.json();
        $('ul.gBook_list').append('</br></br>');
        for(idx = 0; idx<4; idx++) { //loop to display each result
            $('ul.gBook_list').append('<li style="display:inline"><img src="' + results.items[idx].volumeInfo.imageLinks.thumbnail +'"><p>'+results.items[idx].volumeInfo.title+'</p><p>By '+results.items[idx].volumeInfo.authors[0]+'</p> </li>');
        };
    }
    //We call the function we just created so its executed.
    getData_gBook();