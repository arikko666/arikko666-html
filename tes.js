   var postTitle = new Array();     // array of posttitles
   var postUrl = new Array();       // array of posturls
   var postDate = new Array();      // array of post publish dates
   var postSum = new Array();       // array of post summaries
   var postLabels = new Array();    // array of post labels

// global variables
   var sortBy = "datenewest";         // default value for sorting ToC
   var tocLoaded = false;           // true if feed is read and ToC can be displayed
   var numChars = 250;              // number of characters in post summary
   var postFilter = '';             // default filter value
   var tocdiv = document.getElementById("bp_toc"); //the toc container
   var totalEntires =0; //Entries grabbed till now
   var totalPosts =0; //Total number of posts in the blog.


/*  programmer and maker of this code is belong to founder of http://www.ardilas.com
    rawgit url (https://cdn.rawgit.com/D-dig/js/gh-pages/sitemap3.js)
*/

function startpost(json){
  for (var i = 0; i < numposts; i++){
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    
    if (i == json.feed.entry.length) break;
    
    for (var k = 0; k < entry.link.length; k++){
      if (entry.link[k].rel == 'alternate'){
        posturl = entry.link[k].href;break;
      }
    }
        
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    
    document.write(posttitle);
  }
  
  if (standardstyling) document.write('</li>');
}

function finished(){
  document.write('<br /><br /><a href="http://www.ardilas.com/2015/08/cara-membuat-bikin-daftar-isi-sitemap-blogger-blogspot-dengan-berdasarkan-label-kategori-topik-tertentu.html" style="font-size: 10 px; text-decoration:none; color: #616469;" target="_blank" title="Cara Ke-3 Buat Daftar Isi Dengan Label Tertentu di Blogspot">Sitemap</a>');
}
