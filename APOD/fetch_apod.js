// Where we get NASA's astronomy data
let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

// find where each piece of information will appear in HTML

let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

//Ask NASA for data
fetch(apodApiUrl)
//API response into a JavaScript object
    .then( response => response.json() )
    //extract information and display it on the webpage
    .then( data => {

        console.log(data)
   //title and send it to the HTML heading

        let title = data.title 
        apodTitle.innerHTML = title 
        //explanation and display it

        let explanation = data.explanation
        apodExplanation.innerHTML = explanation
// media type and URL to decide what to display
        let mediaType = data.media_type 
        let url = data.url 

        if (mediaType === 'image') {
            apodImage.src = url 
            apodImage.style.display = 'block'
        }
        else if (mediaType === 'video') {
            apodVideo.src = url
            apodVideo.style.display = 'block'
        } 
       
        
    })
    //what happens if the request or processing fails?
    .catch( err => {
        console.log(err)
        apodExplanation.innerHTML = 'Sorry, could not fetch today\'s astronomy picture.'
    })