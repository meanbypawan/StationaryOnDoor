exports.indexPage = (request,response,next)=>{
    response.render("index.ejs",{
        title: 'Stationery On Door'  
    });
}