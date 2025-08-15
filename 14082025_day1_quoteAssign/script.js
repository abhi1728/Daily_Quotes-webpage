const apiURL="https://studentdatabase-83841-default-rtdb.asia-southeast1.firebasedatabase.app/.json";
const proxyURL = 'https://api.allorigins.win/raw?url=';
var quote= document.getElementById("quote");
var author=document.getElementById("quote-author");
let data=[];

// variables
// let a = (local scope)
// var b= (global scope)
async function getQuote()
{
    
    try{
        const response=await fetch(proxyURL+apiURL);
        data=await response.json();
        data["Daily_Quotes"] = data["Daily_Quotes"].filter(function(cntnt) {return (cntnt["q"] && cntnt["q"].trim !== "") &&(cntnt["a"] && cntnt["a"].trim !== "");});
        console.log(data);
        quote.textContent= data["Daily_Quotes"][0]["q"];
        author.textContent=data["Daily_Quotes"][0]["a"];
    }
    catch(error){
        console.log(error);
 
    }
}

//onload (function call)


function nextQuote()
{
    let randomIndex = Math.floor(Math.random() * data["Daily_Quotes"].length);

    quote.textContent = data["Daily_Quotes"][randomIndex]["q"];
    author.textContent = data["Daily_Quotes"][randomIndex]["a"];
}

function shareOnLinkedIn() {
    const quote = document.getElementById("quote").textContent;
    const author = document.getElementById("quote-author").textContent;

    // Make a shareable page URL (for now we can just use your site or a gist/pastebin)
    const pageURL = "http://127.0.0.1:5500/index.html" 
                  + encodeURIComponent(quote + " " + author);

    const linkedInURL = "https://www.linkedin.com/sharing/share-offsite/?url=" 
                      + encodeURIComponent(pageURL);

    window.open(linkedInURL, "_blank");
}
getQuote();
nextQuote();