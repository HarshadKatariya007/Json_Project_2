const Post_Data = (data,url) =>
{
 try {
       fetch(url,
       {
           method:"POST",
           headers : {"Content-Type":"application.json"},
           body:JSON.stringify(data)
       })
 } catch (error) {
    
 }
}
export default Post_Data