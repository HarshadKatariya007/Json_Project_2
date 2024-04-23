
const Post_Data = (UserName,Password) =>
{
	fetch(`https://my-json-server.typicode.com/HarshadKatariya007/mockjson/user?UserName=${UserName}&Password=${Password}`)
	.then((res) => res.json())
	.then((res)=>
	{
		if(res.length==0)
		{
			const notyf = new Notyf();
        	notyf.error({
       		message: 'User Not Found',
        	duration: 4000,
        	position:{
            x:'center',
            y:'top'
        }
        })
        return
		}
		else
		{
			const notyf = new Notyf();
			notyf.success({
			message: 'Login SuccessFully',
			duration: 4000,
			position:{
				x:'center',
				y:'top'
			}
			})
			setTimeout(function()
			{
				window.location.href="/Pages/admin.html";
			},2000)
		}
	
	})
}

const Data_Handle = (e) =>
{
	e.preventDefault();

	let Data =
	{
		UserName : document.querySelector("#username").value,
		Password : document.querySelector("#pass").value
	}
	
	if(Data.UserName=="")
	{
		const notyf = new Notyf();
        notyf.error({
        message: 'Please Fill Blank User Name',
        duration: 4000,
        position:{
            x:'center',
            y:'top'
        }
        })
        return
	}
	if(Data.Password=="")
	{
		const notyf = new Notyf();
        notyf.error({
        message: 'Please Fill Blank Password',
        duration: 4000,
        position:{
            x:'center',
            y:'top'
        }
        })
        return
	}
	Post_Data(Data.UserName,Data.Password)
}




document.querySelector("#User").addEventListener("submit",Data_Handle)



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