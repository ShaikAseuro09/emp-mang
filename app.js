fetch("http://localhost:5000/employees")
    .then(response => response.json())
    .then(data => {

        const tbody = document.querySelector("#employeeTable tbody");

        data.forEach(employee => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
            `;

            tbody.appendChild(row);
        });

    })
    .catch(error => {
        console.error("Error:", error);
    });