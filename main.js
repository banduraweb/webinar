(()=> {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then(data=>data.json())
        .then(data=>data.map(item=>document.getElementById('rate-container').innerHTML +=
            `<td>${item.ccy}</td> <td>${item.base_ccy}</td> <td>${item.buy} <td>${item.sale}</td>`))
})();