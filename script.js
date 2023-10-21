async function getData(){
    try {
        let datas = await fetch("https://finalspaceapi.com/api/v0/character", {
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
           
        })
        let output = await datas.json()
        output.map((val, ind)=>{
            displayData(val);
        })
    } catch (error) {
        console.log("error")
    }
}
getData();
let dataDiv = document.querySelector(".data-div");


console.log(dataDiv)

function displayData(data){
    let a = document.createElement("div");
    a.innerHTML=`
    <div class="child">
    <h3 class="name">${data.name}</h3>
    </div>
    <div class="duration">
        <p>Status: ${data.status}</p>
        <p>Gender: ${data.gender}</p>
        <p>Species: ${data.species}</p>
        <p>Hair: ${data.hair}</p>
    </div>`

    a.className="box"

    dataDiv.appendChild(a);
}