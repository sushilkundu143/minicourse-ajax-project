
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

/* city auto-complete using json city api*/
var cities = [
   "Sant Julià de Lòria",
    "Pas de la Casa",
    "Ordino",
    "les Escaldes",
    "la Massana",
    "Canillo",
    "Arinsal",
    "Andorra la Vella",
    "Umm al Qaywayn",
    "Ras al-Khaimah",
    "Muzayri‘",
    "Khawr Fakkān",
    "Dubai",
    "Dibba Al-Fujairah",
    "Dibba Al-Hisn",
    "Sharjah",
    "Ar Ruways",
    "Al Fujayrah",
    "Al Ain",
    "Ajman",
    "Adh Dhayd",
    "Abu Dhabi",
    "Zorkot",
    "Wulêswālī Bihsūd",
    "Kuhsān",
    "Lāsh",
    "Tukzār",
    "Mīray",
    "Āq Kupruk",
    "Zurmat",
    "Zaybāk",
    "Zīārat-e Shāh Maqşūd",
    "Zindah Jān",
    "Zarghūn Shahr",
    "Zaṟah Sharan",
    "Zaranj",
    "Zamtō Kêlay",
    "Yangī Qal‘ah",
    "Yaḩyá Khēl",
    "Wāshēr",
    "Tōrmay",
    "Tūlak",
    "Tītān",
    "Tīr Pul",
    "Taywarah",
    "Bāzār-e Tashkān",
    "Tarinkot",
    "Taloqan",
    "Tagāw-Bāy",
    "Tagāb",
    "Markaz-e Ḩukūmat-e Sulţān-e Bakwāh",
    "Spīn Bōldak",
    "Spērah",
    "Sōzmah Qal‘ah",
    "Siyāhgird",
    "Sheywah",
    "Shīnḏanḏ",
    "Shaykh Amīr Kêlay",
    "Qāshqāl",
    "Shibirghān",
    "Shwāk",
    "Shahr-e Şafā",
    "Shahrān",
    "Shahrak",
    "Alāqahdārī Shāh Jōy",
    "Wulêswālī Sayyid Karam",
    "Markaz-e Sayyidābād",
    "Şayād",
    "Sidqābād",
    "Sāyagaz",
    "Sar-e Tayghān",
    "Sarōbī",
    "Sar Kāṉī",
    "Sarfirāz Kalā",
    "Sar-e Pul",
    "Sar Chakān",
    "Sangīn",
    "Sang-e Māshah",
    "Sang-e Chārak",
    "Sang Atesh",
    "Sangar Sarāy",
    "Aībak",
    "Rū-ye Sang",
    "Rūdbār",
    "Rustāq",
    "Rabāţ-e Sangī-ye Pā’īn",
    "Rāmak",
    "Qurghān",
    "Quchanghī",
    "Sangalak-i-Kaisar",
    "Qarqīn",
    "Qarghah’ī",
    "Qarchī Gak",
    "Qarāwul",
    "Qarah Bāgh",
    "Qarah Bāgh",
    "Qala i Naw",
    "Qal‘ah-ye Kūf",
    "Qal‘ah-ye Kuhnah",
    "Qal‘ah-ye Shahr",
    "Qalāt",
    "Qal‘ah-ye Shāhī",
    "Qādis",
    "Pārūn",
    "Pul-e Khumrī",
    "Pul-e ‘Alam",
    "Pasnay",
    "Pāshmūl",
    "Pasāband",
    "Panjāb",
    "Paghmān",
    "Ōmnah",
    "Qaryeh-ye Owbeh",
    "Uruzgān",
    "Urgūn",
    "Nūsay",
    "Nūrgal",
    "Now Zād",
    "Nīlī",
    "Nayak",
    "Nāyak",
    "Now Dahānak",
    "Ōkak",
    "Nāṟay",
    "Narang",
    "Nīkêh",
    "Nahrīn",
    "Ḩukūmat-e Nād ‘Alī",
    "Mūsá Qal‘ah",
    "Bala Murghab",
    "Muqêr",
    "Muḩammad Āghah Wuluswālī",
    "Mīzān ‘Alāqahdārī",
    "Mīr Bachah Kōṯ",
    "Mīrān",
    "Mīrābād",
    "Maymana",
    "Maīdān Khūlah",
    "Mingajik",
    "Mehtar Lām",
    "Mazār-e Sharīf",
    "Māymay",
    "Mutā Khān",
    "Mashhad",
    "Mardīān",
    "Mandōl",
    "Māmā Khēl",
    "Lashkar Gāh",
    "Lāsh-e Juwayn",
    "Larkird",
    "La‘l",
    "Kushk",
    "Kōṯowāl",
    "Kushk-e Kuhnah",
    "Kuran wa Munjan",
    "Kunduz",
    "Khōshī",
    "Khōshāmand",
    "Khwājah Ghār",
    "Khwājah Dū Kōh",
    "Deh Khwāhān",
    "Khulbisāt",
    "Khūgyāṉī",
    "Khōst",
    "Khulm",
    "Khudāydād Khēl",
    "Khinjān",
    "Khinj",
    "Khāsh",
    "Khān Neshīn",
    "Khānaqāh",
    "Chahār Bāgh",
    "Khānaqāh",
    "Khanabad",
    "Khamyāb",
    "Khākirān",
    "Kaz̲h̲ah",
    "Kishk-e Nakhūd",
    "Karukh",
    "Kanḏay",
    "Kandahār",
    "Kalān Deh",
    "Kalakān",
    "Kalafgān",
    "Kajrān",
    "Kai",
    "Kabul",
    "Jurm",
    "Jawand",
    "Jānī Khēl",
    "Jalrēz",
    "Jalālābād",
    "Jabal os Saraj",
    "Ḩukūmat-e Shīnkaī",
    "Herāt",
    "Ḩājī Khēl",
    "Ḩāfiz̧ Moghul",
    "Khafizan",
    "Guz̄arah",
    "Gōshtah",
    "Gōmal Kêlay",
    "‘Alāqahdārī Gēlān",
    "Ghōriyān",
    "Ghormach",
    "Ghurayd Gharamē",
    "Ghazni",
    "Gereshk",
    "Gardez",
    "Fayzabad",
    "Faīẕābād",
    "Fayẕābād",
    "Qal‘ah-ye Fārsī",
    "Farkhār",
    "Farah",
    "Istālif",
    "Kafir Qala",
    "Injīl",
    "Imām Şāḩib",
    "Dōshī",
    "Dowlatyār",
    "Dowlat Shāh",
    "Dowlatābād",
    "Dowlatābād",
    "Dū Qal‘ah",
    "Dūāb",
    "Dê Nārkhēl Kêlay",
    "Dehī",
    "Deh-e Şalāḩ",
    "Deh-e Now",
    "Dehdādī",
    "Dwah Manḏay",
    "Dasht-e Qal‘ah",
    "Dasht-e Qal‘ah",
    "Dasht-e Archī",
    "Darzāb",
    "Markaz-e Ḩukūmat-e Darwēshān",
    "Darqad",
    "Darāyim",
    "Dāngām",
    "Ḏanḏar",
    "Ḩukūmatī Dahanah-ye Ghōrī",
    "Tsowkêy",
    "Chīras",
    "Chisht-e Sharīf",
    "Chinār",
    "Chimtāl",
    "Charkh",
    "Charikar",
    "Dowr-e Rabāţ",
    "Tsapêraī",
    "Tsamkanī",
    "Chakaray",
    "Chākarān",
    "Chahār Qal‘ah",
    "Chahār Burj",
    "Chāh Āb",
    "Fayrōz Kōh",
    "Bulōlah",
    "Bal Chirāgh",
    "Bāzār-e Tālah",
    "Bāsawul",
    "Būrkah",
    "Barg-e Matāl",
    "Baraki Barak",
    "Banū",
    "Bāmyān",
    "Balkh",
    "Bahārak",
    "Bagrāmī",
    "Baghlān",
    "Ḩukūmatī Azrah",
    "Ārt Khwājah",
    "‘Alāqahdārī Aṯghar",
    "Āsmār",
    "Ashkāsham",
    "Asadābād",
    "Āqchah",
    "Andkhōy",
    "’Unābah",
    "Anār Darah",
    "Amānzī",
    "‘Alāqahdārī-ye Almār",
    "‘Alī Shēr ‘Alāqahdārī",
    "Wuluswālī ‘Alīngār",
    "‘Alī Khēl",
    "‘Alāqahdārī Yōsuf Khēl",
    "‘Alāqahdārī Dīshū",
    "Alah Sāy",
    "Pachīr wa Āgām",
    "Afaki",
    "Adraskan",
    "Āb-e Kamarī",
    "Khadīr",
    "Ghulām ‘Alī",
    "Qarah Bāgh Bāzār",
    "Zargarān",
    "Surkh Bilandī",
    "Pul-e Sangī",
    "Langar",
    "Bāgh-e Maīdān",
    "Ibrāhīm Khān",
    "Qaranghū Tōghaī",
    "Bāzārak",
    "Shērwānī-ye Bālā",
    "Kirāmān",
    "‘Alāqahdārī Saṟōbī",
    "Zerok-Alakadari",
    "Kushkak",
    "Khayr Kōṯ",
    "Chowṉêy",
    "Wuṯahpūr",
    "Karbori",
    "Sulţānpūr-e ‘Ulyā",
    "Babasakhib",
    "Chandal Bā’ī",
    "Dahan-e Jarf",
    "Maydanshakhr",
    "Dū Laīnah",
    "Qaram Qōl",
    "Pul-e Ḩişār",
    "Lab-Sar",
    "Ţāqchah Khānah",
    "March",
    "Zīrakī",
    "Aliabad",
    "Pas Pul",
    "Qal‘ah-ye Na‘īm",
    "Markaz-e Woluswalī-ye Āchīn",
    "Manogay",
    "Stêr Giyān",
    "Sharan",
    "Salām Khēl",
    "Saint John’s",
    "Potters Village",
    "Piggotts",
    "Parham",
    "Liberta",
    "Falmouth"
];
console.log(cities);
$('#city').mdb_autocomplete({
     data: cities
});


/*
$( "#city").autocomplete({
    source: function( request, response ) {
      $.ajax( {
        url: "../api/cities.json",
        dataType: "json",
        data: {
            item: request.item
        },
        success: function( data ) {
          response( data );
        }
      } );
    },
    minLength: 10,
    select: function( event, ui ) {
      log( "Selected: " + ui.item.value + " aka " + ui.item.id );
    }
  } );
  */