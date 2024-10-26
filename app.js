document.getElementById("about-sc").addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    var firstname = document.getElementById("firstname")
        .value;
    var middlename = document.getElementById("middlename")
        .value;
    var lastname = document.getElementById("lastname")
        .value;
    var designation = document.getElementById("designation").value;
    var address = document.getElementById("address")
        .value;
    var email = document.getElementById("email").value;
    var phoneno = document.getElementById("phoneno")
        .value;
    var summary = document.getElementById("summary")
        .value;
    var ach_title = document.getElementById("ach_title")
        .value;
    var ach_description = document.getElementById("ach_description").value;
    var ex_title = document.getElementById("ex_title")
        .value;
    var ex_company = document.getElementById("ex_company")
        .value;
    var ex_location = document.getElementById("ex_location").value;
    var ex_start_date = document.getElementById("ex_start_date").value;
    var ex_end_date = document.getElementById("ex_end_date").value;
    var ex_description = document.getElementById("ex_description").value;
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var city = document.getElementById("city").value;
    var start_date = document.getElementById("start_date")
        .value;
    var end_date = document.getElementById("end_date")
        .value;
    var description = document.getElementById("description").value;
    var project = document.getElementById("project")
        .value;
    var pro_link = document.getElementById("pro_link")
        .value;
    var pro_description = document.getElementById("pro_description").value;
    var skills = document.getElementById("skills").value.split(",");
    document.getElementById("fullname_dsp").textContent = " Full Name: ".concat(firstname, "  ").concat(middlename, "  ").concat(lastname);
    document.getElementById("designation_dsp").textContent = " Designation: ".concat(designation);
    document.getElementById("phoneno_dsp").textContent = " Phone No: ".concat(phoneno);
    document.getElementById("email_dsp").textContent = " Email Address: ".concat(email);
    document.getElementById("address_dsp").textContent = "Address: ".concat(address);
    document.getElementById("summary_dsp").textContent = "Summary: ".concat(summary);
    document.getElementById("achievements_dsp").innerHTML = "Achievement Title / Description: ".concat(ach_title, ": ").concat(ach_description);
    document.getElementById("experiences_dsp").innerHTML = "Experience: ".concat(ex_title, " at ").concat(ex_company, ", ").concat(ex_location, " (").concat(ex_start_date, " - ").concat(ex_end_date, "): ").concat(ex_description);
    document.getElementById("educations_dsp").innerHTML = "Degree Info: ".concat(degree, " from ").concat(school, ", ").concat(city, " (").concat(start_date, " - ").concat(end_date, "): ").concat(description);
    document.getElementById("projects_dsp").innerHTML = "Project Details: ".concat(project, " (<a href=\"").concat(pro_link, "\" target=\"_blank\">Link</a>): ").concat(pro_description);
    var skillsContainer = document.getElementById("skills_dsp");
    skillsContainer.innerHTML = "";
    skills.forEach(function (skill) {
        var skillElement = document.createElement("p");
        skillElement.textContent = skill.trim();
        skillsContainer.appendChild(skillElement);
    });
    var fileInput = document.getElementById("yourimage");
    var displayImage = document.getElementById("image_dsp");
    var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            displayImage.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            displayImage.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
    else {
        displayImage.style.display = "none";
    }
    document.getElementById("preview-sc").style.display = "block";
});