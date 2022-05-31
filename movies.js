
// let moviename=prompt("Enter the movie name")



let details=[]
let movie=async()=>{

    let moviename=document.getElementById("inputfield").value
    console.log(moviename)
   

    try{
        let response=await fetch( `http://www.omdbapi.com/?s=${moviename}&apikey=f056e2f7`)
        let data=await response.json()
        console.log(data)

        let data1="";
              data.Search.map((value)=>{
            //   console.log(value.Title);
            //   console.log(value.Poster)


            // let title=document.getElementById("title").innerHTML=value.Title

            //   let year=document.getElementById("year").innerHTML=value.Year
            //   let image=document.getElementById("img").src=value.Poster

            data1+=`<div class="card " >
            <img id="img" height="50px" margin:0px; padding:0px; src="${value.Poster} alt="">
            <div class="card-body text-center">
                <p id="title">${value.Title}</p>
                <p id="year">${value.Year}</p>
                <a href="#" class="btn btn-dark btn-lg w-100 border border-bottom-5 ">Go somewhere</a>
            </div>
        </div>`;
    });
                
              document.getElementById("cards").innerHTML=data1;

        

    }catch{console.log("Error Occured please check")}
   
}


// movie()
console.log(details)




