let tbody = document.querySelector("tbody")
fetch("https://northwind.vercel.app/api/suppliers")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 10; i++) {
            tbody.innerHTML += ` <tr>
            <td>${data[i].companyName}</td>
            <td>${data[i].contactTitle}</td>
            <td>${data[i].contactName}</td>
            <td><a href="../view/view.html"><i class="fa-solid fa-eye bg-primary"></i></a>
            <a href="../update/update.html"><i class="fa-solid fa-wrench bg-warning"></i></a>
            <a><i class="fa-solid fa-trash bg-danger"></i></a></td>
        </tr>`
        }
        // data.forEach(element => {
        //     element.    
        // });
    })