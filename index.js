
// const btn = document.getElementById("primary_btn");

// btn.addEventListener()
let arr = [];
let maindiv = document.querySelector(".main__div");

    axios.get("https://type.fit/api/quotes")
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then((res) =>{
        res.map((items) => {
                arr.push(items.text);
            });
    })
    

let i =0;
const showData=() =>{
     var e = document.querySelector(".main__div");
        
        //e.firstElementChild can be used.
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    let para = document.createElement("p");
    console.log(arr[i]);
    para.textContent = arr[i];
    maindiv.appendChild(para);
    i++;
}