import Nav_Bar from "../Components/nav_bar.js";

document.querySelector("#Nav_Bar").innerHTML= Nav_Bar

const API_UI = (data) =>
{
    data.map(() =>
    {
       
    })
}

const Get_API = async () =>
{
try {
        let res = await fetch("http://localhost:3000/cart")
        let data = await res.json()
        API_UI(data)
    }
catch (error) {
    console.log("API Error",error);
}
}

Get_API()