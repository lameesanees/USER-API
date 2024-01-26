// instaniate xmhhtpp request object
const xhttp = new XMLHttpRequest()

// initialise api call using object
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users")

//initialize api request
xhttp.send()

console.log(xhttp.readyState)

xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(JSON.parse(xhttp.responseText))
        let users=JSON.parse(xhttp.responseText)
        htmlData=""
        users.forEach((item)=>(
            htmlData+=`
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>${item.address}</td>
        <td>${item.address.city}</td>
        <td>${item.address.street}</td>
        <td>${item.address.zipcode}</td>
        </tr>
        `
        ))
        console.log(htmlData)
        result.innerHTML=htmlData
}
}