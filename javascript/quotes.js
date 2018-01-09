
var loadedData;
var xhr = new XMLHttpRequest();
xhr.open("GET", "./files/quotes.json", true);
xhr.send();
xhr.onreadystatechange = function()
{
    if(xhr.readyState === 4)
    {
        gotData(JSON.parse(xhr.responseText));
    }
}

function gotData(data)
{
    loadedData = data;
    startQuoteLoop();
}

function startQuoteLoop()
{
    var index = 0;
    setInterval(function()
    {
        if(index < loadedData.length)
        {
            document.querySelector("#quoteContainer").innerHTML = 
            "\"" + loadedData[index].quote + "\"<br> ~" + loadedData[index].name; 
            index ++;  
        }
        else
        {
            index = 0;
        }
    }, 5000);
}