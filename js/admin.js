import Post_Data from "../Api/Post.js";
import Nav_Bar from "../Components/nav_bar.js"

document.querySelector("#Nav_Bar").innerHTML=Nav_Bar


const Data_Handle = (e) =>
{
    e.preventDefault();
    
    let Data = 
    {
        title: document.querySelector("#title").value,
        url : document.querySelector("#url").value,
        price : document.querySelector("#price").value
    }

    if(Data.title=="")
    {
        const notyf = new Notyf();
        	notyf.error({
       		message: 'Please Fill Blank Title',
        	duration: 4000,
        	position:{
            x:'center',
            y:'top'
        }
        })
        return
    }
    if(Data.url=="")
    {
        const notyf = new Notyf();
        	notyf.error({
       		message: 'Please Fill Shoes URL',
        	duration: 4000,
        	position:{
            x:'center',
            y:'top'
        }
        })
        return
    }
    if(Data.price=="")
    {
        const notyf = new Notyf();
        	notyf.error({
       		message: 'Please Fill Blank Price',
        	duration: 4000,
        	position:{
            x:'center',
            y:'top'
        }
        })
        return
    }
    Post_Data(Data,"https://my-json-server.typicode.com/HarshadKatariya007/mockjson/product")
   window.location.href="/Pages/product.html"
}



document.querySelector("#Product_Data").addEventListener("submit",Data_Handle)