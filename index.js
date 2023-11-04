const customers = document.getElementById("customers");
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const btn = document.getElementById("btn");
const id = document.getElementById("id");


// // Fetch Get

// function myfunc(){
//     fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// btn.addEventListener("click",myfunc)


// // Fetch Post

//  btn.addEventListener('click', function () {
//      fetch('https://northwind.vercel.app/api/customers', {
//            method: "POST",
//            headers: {
//              "Content-Type": "application/json",
//            },
//            body: JSON.stringify({
//              name: inp1.value,
//              description: inp2.value
//             }),
//          })
  
//  })

// Fetch Delete

// function FetchDel() {
//         let tr = `https://northwind.vercel.app/api/customers/${inp1.value}`;

//         fetch(tr, {
//           method: "DELETE",
//         }).then((res) => console.log(res));
//       }

// btn.addEventListener('click', FetchDel)








// AXIOS GET MEthod

// axios.get("https://northwind.vercel.app/api/customers/")
// .then((data) => {
//       console.log(data.data);
//     });



// AXIOS POST method


    // function fetchPost () {
    //         axios.post("https://northwind.vercel.app/api/customers/", {
    //             name: inp1.value,
    //             description: inp2.value
    //         }).then(res => {
    //                 console.log(res);
    //             })
    //             }
                
                
    //             btn.addEventListener('click', fetchPost)


// AXIOS Delete method


//    function axiosDelete () {
//    axios.delete(`https://northwind.vercel.app/api/customers/${id.value}`)
// }
//  btn.addEventListener('click', axiosDelete)























