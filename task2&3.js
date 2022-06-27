var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);//link was not working sometimes ,kindly look out the code please
request.send();
request.onload = function()
{
    var data = JSON.parse(request.response);
    for(var i in data)
    {
        console.log(data[i].flag);
    }
    for(var i in data)
    {
        console.log(data[i].name,data[i].region,data[i].subregion,data[i].population);
    }
}