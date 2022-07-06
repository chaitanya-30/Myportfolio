// api key-0D7YTR8A6RJWASQ6
var symbol=document.getElementById("symbol");
    var para=document.getElementById("para");

function load(){
    // var url = `https://www.alphavantage.co/query?function=OVERVIEW&BSE:INFY&apikey=0D7YTR8A6RJWASQ6`
    var url=`http://finance.google.com/finance/info?client=ig&q=NSE:HDFC`
    console.log(symbol)
	console.log(para)
var valsymbol = symbol.value;
var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + valsymbol + "')");



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af133b5ea3mshc7a554d2cd0e5dbp125eb9jsn9b73fc765125',
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
	}
};
fetch(url)
	.then(response => response.json())
	.then(response =>{ console.log(response)
		// console.log(response.Description)
    // para.innerText=response.Description})
    // })
	})
	.catch(err => console.error(err));
}