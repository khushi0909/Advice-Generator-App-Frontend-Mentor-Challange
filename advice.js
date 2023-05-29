// const adviceid = document.getElementById("adviceid");




async function  fetching(){

    try{
        
        const data = await  fetch("https://api.adviceslip.com/advice")
    
    const response = await data.json();
    console.log(response)
    console.log(response.slip.id)
    console.log(response.slip.advice)
const adviceid = document.getElementById("adviceid");
const quote = document.getElementById("quote")
// const adviceid = document.querySelectorAll("adviceid")

   adviceid.innerText =`ADVICE # ${response.slip.id} `
   quote.innerText = `"${response.slip.advice}"`

// return response
}
    

    catch(error){
        console.error("Error",error)
    }
}

// fetching();

