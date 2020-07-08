const beerInfo = document.querySelector(".beer-details")
const reviewInfo = document.getElementsByTagName("li")
function fetchBeerInfo(){
    fetch("http://localhost:3000/beers/1")
        .then(resp => resp.json())
        .then(beersData => createBeersData(beersData))
        .catch(err => console.log(err))

}

function createBeersData(beerData){
    
    beerInfo.innerHTML = `
    <div class="beer-details">

    <h2>${beerData.name}</h2>

    <img src="${beerData.image_url}">
    
    <form class="description">
    <textarea>${beerData.description}</textarea>
    
    <button> Update Beer </button>
    </form>

    <h3> Leave a Review </h3>
    <form class="review-form">
    <textarea></textarea>
    <input type="submit" value="Submit">
        </form>

    </div>
    `  

}

// function showReviews(beerReview){
//   Info.innerHTML = `
//     <div class="beer-details">
//         <h3>Customer Reviews</h3>
//             <ul class="reviews">
//                 <li>${beerReview}</li>
//                 <li></li>
//             </ul>
//     </div>
//   `
// }


fetchBeerInfo()

