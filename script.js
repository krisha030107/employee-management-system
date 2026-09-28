/* =========================
   LOGIN
========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;


        if (
            email === "admin@employeehub.com" &&
            password === "12345"
        ) {

            window.location.href = "dashboard.html";

        } else {

            document.getElementById("loginMessage").textContent =
                "❌ Invalid email or password.";

        }

    });

}


/* =========================
   EMPLOYEE SEARCH
========================= */

const employeeSearch =
    document.getElementById("employeeSearch");

const departmentFilter =
    document.getElementById("departmentFilter");

const employeeCards =
    document.querySelectorAll(".employee-card");


function filterEmployees() {

    const searchText =
        employeeSearch
            ? employeeSearch.value.toLowerCase().trim()
            : "";

    const selectedDepartment =
        departmentFilter
            ? departmentFilter.value
            : "all";


    employeeCards.forEach(function(card) {

        const employeeName =
            card.dataset.name.toLowerCase();

        const employeeDepartment =
            card.dataset.department;


        const matchesName =
            employeeName.includes(searchText);

        const matchesDepartment =
            selectedDepartment === "all" ||
            employeeDepartment === selectedDepartment;


        if (matchesName && matchesDepartment) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


/* SEARCH WHILE TYPING */

if (employeeSearch) {

    employeeSearch.addEventListener(
        "input",
        filterEmployees
    );

}


/* DEPARTMENT FILTER */

if (departmentFilter) {

    departmentFilter.addEventListener(
        "change",
        filterEmployees
    );

}