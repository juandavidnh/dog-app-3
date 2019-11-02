function generateURL(dogBreed){
    console.log(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
    return `https://dog.ceo/api/breed/${dogBreed}/images/random`;

}

function listenToNumber(){
    let dogBreed = $('form').find('input[type="text"]').val().toLowerCase();
   return generateURL(dogBreed);

}


function displayResults(responseJson) {
    console.log(responseJson);
    $('.results').empty();
    $('.results').append(`<img src="${responseJson.message}" alt="dog-image" class="results-img">`);

}

function getDogImages(URL){
    fetch(URL)
    .then(response => response.json())
    .then(responseJson => {
        if(responseJson.status==="success"){
        displayResults(responseJson)
        }else{
            throw error;
        }
    })
    .catch(error => alert('Sorry, that dog breed is not in our database.'));
}




function watchForm(){
    $('form').on('click', 'button', function(e){
        e.preventDefault();
        let apiURL = listenToNumber();
        getDogImages(apiURL);
    })
}


$(watchForm);