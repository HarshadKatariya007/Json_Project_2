import Post_Data from "../Api/Post.js"

const User_Check = (Data) =>
{
    fetch(`https://my-json-server.typicode.com/HarshadKatariya007/mockjson/user?Email=${Data.Email}`)
    .then((res)=> res.json())
    .then((res)=>
    {
        if(res.length == 0)
        {
            
            const notyf = new Notyf();
            notyf.success({
                message: 'Registration SuccessFully',
                duration: 4000,
                position:{
                    x:'center',
                    y:'top'
                }
            })
            setTimeout(function()
            {
                window.location.href="/Pages/login.html"
                Post_Data(Data,"https://my-json-server.typicode.com/HarshadKatariya007/mockjson/user")
            },2000)
        }
        else
        {
            const notyf = new Notyf();
            notyf.error({
            message: 'Email Is Already Exists',
            duration: 4000,
            position:{
            x:'center',
            y:'top'
             }
        })
        return
        }
    })
}

const Data_Handle = (e) =>  
{
    e.preventDefault();
    
    const User_P =/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    const Password_P =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    let Data = 
    {   
            UserName:document.querySelector("#username").value,
            Email:document.querySelector("#email").value,
            Password:document.querySelector("#pass").value,

    }
   

    if((Data.Email=="") || (Data.UserName=="") || (Data.Password=="") || (Data.Profile==""))
    {
        const notyf = new Notyf();
        notyf.error({
        message: 'Please Fill Blank',
        duration: 4000,
        position:{
            x:'center',
            y:'top'
        }
        })
        return
    }
    if(User_P.test(Data.UserName)==false)
    {
        const notyf = new Notyf();
        notyf.error({
        message: 'Please Enter Valid User Name',
        duration: 4000,
        position:{
            x:'center',
            y:'top'
        }
        })
        return
    }
    if(Password_P.test(Data.Password)==false)
    {
        const notyf = new Notyf();
        notyf.error({
        message: 'Please Enter Valid Password',
        duration: 4000,
        position:{
            x:'center',
            y:'top'
        }
        })
        return
    }
    User_Check(Data);
}


const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

document.querySelector("#User").addEventListener("submit",Data_Handle)