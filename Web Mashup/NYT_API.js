/* Restful request
https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20201206&end_date=20201207&sort=newest&q=pollution&api-key=YOUR_API_KEY
*/
const NYT_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const NYT_params = "begin_date=20180314&end_date=20210324&sort=oldest&";
const NYT_topic = "q=desertification";
const NYT_key = "&api-key=oNjNVQHwl99ouAAGDEshMcM1AnLLYH3z";

const NYT_request = NYT_url + NYT_params + NYT_topic + NYT_key;
console.log(NYT_request);

async function getData_NYT() {
  const response = await fetch(NYT_request);
  const results = await response.json();

  const articles = results.response.docs;

  for(i=0; i< 3 ; i++){

    if (articles[i].multimedia.length < 3){
        var image = "<div></div>";
    }
    else {
      var image = "<img src='https://www.nytimes.com/"+articles[i].multimedia[2].url+"' class='nyt_thumb' alt='"+articles[i].headline.main+" image "+articles[i].multimedia[2].subtype+"' title='"+articles[i].headline.main+" image "+articles[i].multimedia[2].subtype+"' height='80'  width='120' >";
    }
      var pub_date_day = String(articles[i].pub_date.substring(0, 10));
      pub_date_day = pub_date_day.split('-').reverse().join('-')
      $("div.nyt").append("<article>"+image+"<div class='headline'>"+ articles[i].headline.main+"</div><em>"+ pub_date_day+"</em><p>"+ articles[i].snippet+"</p></article>");

  };
};
getData_NYT();