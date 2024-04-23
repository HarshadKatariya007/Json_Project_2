import nav_bar from "../Components/nav_bar.js";
import Post_Data from "../Api/Post.js";


document.querySelector("#Nav_Bar").innerHTML= nav_bar

const Cart_Data = (data) =>
{
    const notyf = new Notyf();
			notyf.success({
			message: 'Cart Add SuccessFully',
			duration: 4000,
			position:{
				x:'center',
				y:'top'
			}
			})
            setTimeout(function()
            {
                window.location.reload()
                Post_Data(data,"http://localhost:3000/cart");
            },1000)

}

const API_UI = (data) =>
{
    document.querySelector("#Data_Ui").innerHTML=""
    data.map((ele)=>
    {
       
        let Img_1 = document.createElement("img");
        Img_1.src=ele.url

        let P_tag_1 = document.createElement("p");
        P_tag_1.innerHTML= ele.title

            let P_tag_2 = document.createElement("p");
            P_tag_2.innerHTML=`₹ ${ele.price}`;

            let P_tag_3 = document.createElement("p");
            P_tag_3.innerHTML="Size:-"

            let Span_1 = document.createElement("span");
            Span_1.innerHTML="7";

            let Span_2 = document.createElement("span");
            Span_2.innerHTML="8";

            let Span_3 = document.createElement("span");
            Span_3.innerHTML="9";

            let Span_4 = document.createElement("span");
            Span_4.innerHTML="10";

            let P_tag_4 = document.createElement("p");
            P_tag_4.innerHTML = "Color:-"

            let Color_1 = document.createElement("span");
            let Color_2 = document.createElement("span");
            let Color_3 = document.createElement("span");

            let Card_Content = document.createElement("div");

            let Card__sizeContainer = document.createElement("div");
            
            let Card_Color = document.createElement("div");

            Card__sizeContainer.append(P_tag_3,Span_1,Span_2,Span_3,Span_4);

            Card_Color.append(P_tag_4,Color_1,Color_2,Color_3)

            Card_Content.append(P_tag_2,Card__sizeContainer,Card_Color)

                  

                    let btn_cart  = document.createElement("h6")
                    btn_cart.innerHTML="Buy Now"
                    btn_cart.addEventListener("click",() => Cart_Data(({...ele,qty:1})))
                    
                    let Card_Link = document.createElement("div");
                    Card_Link.append(btn_cart)
                            
                          

                          
        let Card_Div = document.createElement("div");
        Card_Div.append(Img_1,P_tag_1,Card_Content,btn_cart)

        Card_Div.setAttribute("class","card mt-5");
        Img_1.setAttribute("class","card__img");
        P_tag_1.setAttribute("class","card__title w-100 text-center d-block");
        Card_Content.setAttribute("class","card__content");
        P_tag_2.setAttribute("class","text-center mt-3");
        Card__sizeContainer.setAttribute("class","card__sizeContainer d-flex align-item-center justify-content-center w-100 text-center");
        P_tag_3.setAttribute("class","card__sizeTitle");
        Span_1.setAttribute("class","card__sizeNumber");
        Span_2.setAttribute("class","card__sizeNumber");
        Span_3.setAttribute("class","card__sizeNumber");
        Span_4.setAttribute("class","card__sizeNumber");
        Card_Color.setAttribute("class","card__colorContainer d-flex align-item-center justify-content-center w-100");
        P_tag_4.setAttribute("class","card__colorTitle");
        Color_1.setAttribute("class","card__colorCircle");
        Color_2.setAttribute("class","card__colorCircle");
        Color_3.setAttribute("class","card__colorCircle");
        Color_1.style.backgroundColor="#9bdc28";
        Color_2.style.backgroundColor="#03a9f4";
        Color_3.style.backgroundColor="#e91e63";
        btn_cart.setAttribute("class","card__link");
        btn_cart.style.cursor="pointer";
        document.querySelector("#Data_Ui").append(Card_Div)
    })

}

const Get_API = async () =>
{
try {
        let res = await fetch("https://my-json-server.typicode.com/HarshadKatariya007/mockjson/product")
        let data = await res.json()
        API_UI(data)
    }
catch (error) {
    console.log("API Error",error);
}
}

Get_API()