const form = document.getElementById("jobForm");
const jobsContainer = document.querySelector(".myJobs");
const deleteButtons = document.querySelectorAll(".deleteJob");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const company = document.getElementById("company").value.trim();
  const location = document.getElementById("location").value.trim();
  const exprience = document.getElementById("exprience").value.trim();
  const skillsArray = document.getElementById("skills").value.trim().split(",");

  //add
  const jobCard = document.createElement("div");
  jobCard.classList.add("job-card");
  jobCard.innerHTML = `
        <h3>${title}</h3>
        <p class="company">Company: ${company}</p>
        <p class="details">${location} • ${exprience}</p>
       ${skillsArray.map(skill => {return `<span class="tag">${skill.trim()}</span>`})}
       <div class="delJob">
          <button class="deleteJob">Remove</button>
        </div>
  `;
  jobsContainer.append(jobCard);
  form.reset();
});


//delete
deleteButtons.forEach(button => {
  button.addEventListener("click",(e) => {
    if (e.target.classList.contains("deleteJob")) {
      const jobCard = e.target.closest(".job-card");
      jobCard.remove();
    }
  });
});

const searchInput = document.getElementById("jobSearchInput");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const jobCards = document.querySelectorAll(".job-card");

  jobCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const company = card.querySelector(".company").textContent.toLowerCase();
    const skills = card.textContent.toLowerCase();

    if (title.includes(value) || company.includes(value) || skills.includes(value)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});