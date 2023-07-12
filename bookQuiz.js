var enter = $('.enter-btn');
var textChange = $('.result-text');
var nameOut = "";
console.log("hi");
/*enter.on('click', collectName);

function collectName(event){
  event.preventDefault();
  var name = $('.name').val();
  nameOut = name

}
*/
function getToggledValue(elementName) {
  var radios = document.getElementsByName(elementName);
    for( i = 0; i < radios.length; i++ ) {
        if( radios[i].checked ) {
            return radios[i].value;
        }
    }
    return null;
}

var submitButton = $('.submit-btn');
var image = $('.image');

submitButton.on("click", recommendationResult);

function testing() {
  console.log("test");
}

function recommendationResult() {
  var genreOptions = getToggledValue('genreOptions');
  var tropeOptions = getToggledValue('tropeOptions');
  var container = $(`.container`);
  console.log(tropeOptions);
  console.log("test")
  if (genreOptions === "romance" && tropeOptions === "enemiesToLovers") {
    textChange.text("Your personalized recommendation is Today Tonight Tomorrow by Rachel Lynn Soloman!");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582468069i/52766407.jpg>`)
    //Today Tonight Tomorrow
    console.log("test")
  }
  else if (genreOptions === "fantasy" && tropeOptions === "enemiesToLovers") {
    textChange.text("Your personalized recommendation is Fourth Wing by Rebecca Yarros!");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666994927i/61431922.jpg>`)
    //Fourth Wing;
  }
  if (genreOptions === "thrillerHorror" && tropeOptions === "enemiesToLovers") {
    textChange.text("Your personalized recommendation is Stalking Jack the Ripper by Keri Maniscalco!");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1530823449i/40727470.jpg>`);
    //Stalking Jack the Ripper;
  }
  if (genreOptions === "romance" && tropeOptions === "foundFamily") {
    textChange.text("Your personalized recommendation is Things We Never Got Over by Lucy Score!");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641629293i/60060431.jpg>`);
    //Things We Never Got Over;
  }
  if (genreOptions === "fantasy" && tropeOptions === "foundFamily") {
    textChange.text("Your personalized recommendation is Six of Crows by Leigh Bardugo!");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651710803i/23437156.jpg>`);
   //Six of Crows;
  }
  if (genreOptions === "thrillerHorror" && tropeOptions === "foundFamily") {
    textChange.text("Your personalized recommendation is The Naturals by Jennifer Lynn Barnes!");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620015246i/13597723.jpg>`);
    //The Naturals;
  }
  if (genreOptions === "romance" && tropeOptions === "fakeDating") {
    textChange.text("Your personalized recommendation is The Dating Plan by Sara Desai!");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595387142i/54326395.jpg>`);
    //The Dating Plan;
  }
  if (genreOptions === "fantasy" && tropeOptions === "fakeDating") {
    textChange.text("Your personalized recommendation is Caraval by Stephanie Garber!");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465563623i/27883214.jpg>`);
    //Caraval;
  }
  if (genreOptions === "thrillerHorror" && tropeOptions === "fakeDating") {
    textChange.text("Your personalized recommendation is Foul Lady Fortune by Chloe Gong");
    container.append(`<img class= "image" src = https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642713157i/57190453.jpg>`);
    //Foul Lady Fortune;
  }

  return false;
}

