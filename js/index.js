let switchBtn = document.getElementById("theme-toggle-button");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

let allBtn = document.querySelector("button[data-filter=all]");
let webBtn = document.querySelector("button[data-filter=web]");
let appBtn = document.querySelector("button[data-filter=app]");
let designBtn = document.querySelector("button[data-filter=design]");
let ecommerceBtn = document.querySelector("button[data-filter=ecommerce]");

let filterBtns = document.querySelectorAll(".portfolio-filter");
let portfolioItems = document.querySelectorAll(".portfolio-item");

let settingsToggleBtn = document.getElementById("settings-toggle");
let settingsSidebarPart = document.getElementById("settings-sidebar");
let closeSettingsBtn = document.getElementById("close-settings");

let fontsBtn = document.querySelectorAll(".font-option");

let colorBtns = document.querySelectorAll("#theme-colors-grid button");

let resetBtn=document.getElementById("reset-settings")

let scrollToTopBtn = document.getElementById("scroll-to-top");

let carouselCards = document.getElementById("testimonials-carousel");
let nextCarousel = document.getElementById("next-testimonial");
let prevCarousel = document.getElementById("prev-testimonial");
let indicators = document.querySelectorAll(".carousel-indicator");

// Navbar activeLink scrolling

function updateActiveLink() {
  let currentSectionId = "";

  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 200) {
      currentSectionId = section.getAttribute("id");
    }
  }

  for (let j = 0; j < navLinks.length; j++) {
    let link = navLinks[j];

    link.classList.remove(
      "text-primary",
      "border-b-2",
      "border-primary",
      "pb-1",
    );
    link.classList.add("text-slate-600", "dark:text-slate-300");

    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.remove("text-slate-600", "dark:text-slate-300");
      link.classList.add(
        "text-primary",
        "border-b-2",
        "border-primary",
        "pb-1",
      );
    }
  }
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// dark and light mode part

switchBtn.addEventListener("click", function () {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    settingsSidebarPart.classList.add("translate-x-full");
    settingsToggleBtn.style.right = "0rem";
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    settingsSidebarPart.classList.add("translate-x-full");
    settingsToggleBtn.style.right = "0rem";
  }
});

// Nav and Tabs part

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    for (let j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "hover:shadow-lg",
        "hover:shadow-primary/50",
      );
      filterBtns[j].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "hover:bg-slate-100",
        "dark:hover:bg-slate-700",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );

      filterBtns[j].setAttribute("aria-pressed", "false");
    }

    this.classList.remove(
      "bg-white",
      "dark:bg-slate-800",
      "text-slate-600",
      "dark:text-slate-300",
      "hover:bg-slate-100",
      "dark:hover:bg-slate-700",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
    this.classList.add(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
      "hover:shadow-lg",
      "hover:shadow-primary/50",
    );
    this.setAttribute("aria-pressed", "true");

    let selectedFilter = this.getAttribute("data-filter");

    for (let k = 0; k < portfolioItems.length; k++) {
      let itemCategory = portfolioItems[k].getAttribute("data-category");

      if (selectedFilter === "all" || selectedFilter === itemCategory) {
        setTimeout(function(){
        portfolioItems[k].style.display="block";
            setTimeout(function(){
                portfolioItems[k].style.opacity="1"
                portfolioItems[k].style.transform="scale(1)"
            }, 10);
        },310)
      } 
        portfolioItems[k].style.opacity="0"
        portfolioItems[k].style.transform="scale(0.8)"
        setTimeout(function(){
                portfolioItems[k].style.display="none"
        },300)
    }
  });
}

// settings gear button and sidebar part

settingsToggleBtn.addEventListener("click", function () {
  settingsSidebarPart.classList.remove("translate-x-full");
  settingsToggleBtn.style.right = "20rem";

  if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener("click", function () {
      settingsSidebarPart.classList.add("translate-x-full");
      settingsToggleBtn.style.right = "0rem";
    });
  }
});

// fonts change part

for (var i = 0; i < fontsBtn.length; i++) {
  fontsBtn[i].addEventListener("click", function () {
    for (var j = 0; j < fontsBtn.length; j++) {
      fontsBtn[j].classList.remove("active");
      fontsBtn[j].style.backgroundColor = "";
      fontsBtn[j].style.border = "";
    }

    document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo",
    );

    this.classList.add("active");

    let isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      this.style.backgroundColor = "#1d293d";
      this.style.border = "1px solid #6366f1";
    }

    let isLight = document.documentElement.classList.contains("Light");

    if (isLight) {
      this.style.backgroundColor = "#transparent";
      this.style.border = "1px solid #6366f1";
    } else {
      this.style.backgroundColor = "transparent";
      this.style.border = "1px solid #6366f1";
    }

    if (this.dataset.font == "alexandria") {
      document.body.classList.add("font-alexandria");
    } else if (this.dataset.font == "tajawal") {
      document.body.classList.add("font-tajawal");
    } else {
      document.body.classList.add("font-cairo");
    }
  });
}

// color buttons change part

for (let i = 0; i < colorBtns.length; i++) {
  colorBtns[i].addEventListener("click", function () {
    for (let j = 0; j < colorBtns.length; j++) {
      colorBtns[j].classList.remove(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900",
      );
    }
    this.classList.add(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );

    let title = this.getAttribute("title");
    let primary, secondary, accent;

    if (title === "Purple Blue") {
      primary = "#6366f1";
      secondary = "#8b5cf6";
      accent = "#a855f7";
    } else if (title === "Pink Orange") {
      primary = "#ec4899";
      secondary = "#f97316";
      accent = "#fb923c";
    } else if (title === "Green Emerald") {
      primary = "#10b981";
      secondary = "#059669";
      accent = "#34d399";
    } else if (title === "Blue Cyan") {
      primary = "#3b82f6";
      secondary = "#06b6d4";
      accent = "#22d3ee";
    } else if (title === "Red Rose") {
      primary = "#ef4444";
      secondary = "#f43f5e";
      accent = "#fb7185";
    } else {
      primary = "#f59e0b";
      secondary = "#ea580c";
      accent = "#fbbf24";
    }

    document.documentElement.style.setProperty("--color-primary", primary);
    document.documentElement.style.setProperty("--color-secondary", secondary);
    document.documentElement.style.setProperty("--color-accent", accent);
  });
}

// reset button part 

resetBtn.addEventListener("click", function () {
  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo"
  );
  document.body.classList.add("font-tajawal");

  for (var i = 0; i < fontsBtn.length; i++) {
    fontsBtn[i].classList.remove("active");
    fontsBtn[i].style.backgroundColor = "";
    fontsBtn[i].style.border = "";

    if (fontsBtn[i].dataset.font === "tajawal") {
      fontsBtn[i].classList.add("active");
      let isDark = document.documentElement.classList.contains("dark");
      if (isDark) {
        fontsBtn[i].style.backgroundColor = "#1d293d";
      } else {
        fontsBtn[i].style.backgroundColor = "transparent";
      }
      fontsBtn[i].style.border = "1px solid #6366f1";
    }
  }

    settingsSidebarPart.classList.add("translate-x-full");
    settingsToggleBtn.style.right = "0rem";

  document.documentElement.style.setProperty("--color-primary", "#6366f1");
  document.documentElement.style.setProperty("--color-secondary", "#8b5cf6");
  document.documentElement.style.setProperty("--color-accent", "#a855f7");

  for (let j = 0; j < colorBtns.length; j++) {
    colorBtns[j].classList.remove(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900"
    );

    if (colorBtns[j].getAttribute("title") === "Purple Blue") {
      colorBtns[j].classList.add(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900"
      );
    }
  }
});

// carousel buttons , indicators part

let x = 0;
let maxSteps = 3;

nextCarousel.addEventListener("click", function () {
  if (x < maxSteps) {
    x++;
    let percentage = x * 33.3333;
    carouselCards.style.transform = `translateX(${percentage}%)`;
  } else {
    x = 0;
    carouselCards.style.transform = "translateX(0%)";
  }
});

prevCarousel.addEventListener("click", function () {
  if (x > 0) {
    x--;
    let percentage = x * 33.3333;
    carouselCards.style.transform = `translateX(${percentage}%)`;
  } else {
    x = maxSteps;
    let percentage = x * 33.3333;
    carouselCards.style.transform = `translateX(${percentage}%)`;
  }
});

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", function () {
    let index = Number(this.getAttribute("data-index"));
    let movePercentage = index * 33.333333;
    carouselCards.style.transform = `translateX(${movePercentage}%)`;

    for (let j = 0; j < indicators.length; j++) {
      indicators[j].style.backgroundColor = "";
      indicators[j].classList.add("dark:bg-slate-600");
      indicators[j].setAttribute("aria-selected", "false");
    }

    this.style.backgroundColor = "var(--accent)";
    this.classList.remove("dark:bg-slate-600");
    this.setAttribute("aria-selected", "true");
  });
}

// scroll to top part

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-1", "visible");
  } else {
    scrollToTopBtn.classList.add("opacity-0", "invisible");
    scrollToTopBtn.classList.remove("opacity-1", "visible");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// fullName , Email , description , projectTypeInp , projectBudgetInp  validation part

let projectNameInp = document.getElementById("full-name")
let projectEmailInp = document.getElementById("email")
let projectDescriptionInp = document.getElementById("project-details")
let projectPhoneInp=document.getElementById("phone")
let wrongNameText = document.getElementById("wrongName")
let wrongEmailText = document.getElementById("wrongEmail")
let wrongDescriptionText = document.getElementById("wrongDescription")
let wrongPhoneText=document.getElementById("wrongPhone")
let projectTypeInp = document.querySelector(".custom-select[data-name=project-type]")
let projectBudgetInp = document.querySelector(".custom-select[data-name=budget]")

function validation() {
  let regex = {
    projectName: /^[A-Za-z\s]{3,20}$/,
    projectEmail: /^[^@]+@[^@]+\.[^@]+$/,
    projectDescription: /^(.|\s)*[a-zA-Z0-9]+(.|\s)*$/,
    projectPhone: /^(01(2|5|0|1)[0-9]{8}|\+201(2|5|0|1)[0-9]{8})$/
  };

  let isNameValid = regex.projectName.test(projectNameInp.value);
  let isEmailValid = regex.projectEmail.test(projectEmailInp.value);
  let isDescriptionValid = regex.projectDescription.test(projectDescriptionInp.value);
  let isPhoneValid =projectPhoneInp.value.trim() === "" ||regex.projectPhone.test(projectPhoneInp.value);

  if (isNameValid) {
    wrongNameText.classList.add("hidden");
  } else {
    wrongNameText.classList.remove("hidden");
  }

  if (isEmailValid) {
    wrongEmailText.classList.add("hidden");
  } else {
    wrongEmailText.classList.remove("hidden");
  }

  if (isDescriptionValid) {
    wrongDescriptionText.classList.add("hidden");
  } else {
    wrongDescriptionText.classList.remove("hidden");
  }

  if(isPhoneValid){
    wrongPhoneText.classList.add("hidden");
  } else {
    wrongPhoneText.classList.remove("hidden");
  }

    if (isNameValid && isEmailValid && isDescriptionValid && isPhoneValid) {
    Swal.fire({

        icon:"success",
        title:"تم إرسال رسالتك بنجاح!",
        text:"شكراً لتواصلك. سأرد عليك في أقرب وقت ممكن.",
        confirmButtonText: "حسناً",
        timer: 5000,
        background: "#1e293b",
        
      customClass: {
        popup:
          "rounded-3xl shadow-2xl border border-slate-700/60 px-8 py-8 max-w-md",
        confirmButton:"bg-[#a855f7] hover:bg-[#9333ea] text-white font-medium px-10 py-3 rounded-2xl transition-all duration-300 border-0 outline-none text-lg shadow-md cursor-pointer mt-4",
    },

    });

    projectNameInp.value = "";
    projectEmailInp.value = "";
    projectDescriptionInp.value = "";
    projectPhoneInp.value=""
  }

  }


projectNameInp.addEventListener("input", function () {
  wrongNameText.classList.add("hidden");
});

projectEmailInp.addEventListener("input", function () {
  wrongEmailText.classList.add("hidden");
});

projectDescriptionInp.addEventListener("input", function () {
  wrongDescriptionText.classList.add("hidden");
});

projectPhoneInp.addEventListener("input", function () {
  wrongPhoneText.classList.add("hidden");
});

if (projectTypeInp) {
  let customOptionsDiv = projectTypeInp.nextElementSibling;
  let customOptionsValues = customOptionsDiv.querySelectorAll(".custom-option");
  let selectedText = projectTypeInp.querySelector(".selected-text");
  let customSelectIconType = document.querySelector(".custom-select[data-name=project-type] i");

  projectTypeInp.addEventListener("click", function () {
    customOptionsDiv.classList.toggle("hidden");
    if (customSelectIconType) {
      customSelectIconType.style.transform = customOptionsDiv.classList.contains("hidden") 
        ? "rotate(0deg)" 
        : "rotate(180deg)";
    }
  });

  for (let i = 0; i < customOptionsValues.length; i++) {
    customOptionsValues[i].addEventListener("click", function () {
      selectedText.textContent = this.textContent;
      customOptionsDiv.classList.add("hidden");
      if (customSelectIconType) customSelectIconType.style.transform = "rotate(0deg)";
    });
  }
}

if (projectBudgetInp) {
  let budgetOptionsDiv = projectBudgetInp.nextElementSibling;
  let budgetOptionsValues = budgetOptionsDiv.querySelectorAll(".custom-option");
  let budgetSelectedText = projectBudgetInp.querySelector(".selected-text");
  let customSelectIconBudget = document.querySelector(".custom-select[data-name=budget] i");

  projectBudgetInp.addEventListener("click", function () {
    budgetOptionsDiv.classList.toggle("hidden");
    if (customSelectIconBudget) {
      customSelectIconBudget.style.transform = budgetOptionsDiv.classList.contains("hidden") 
        ? "rotate(0deg)" 
        : "rotate(180deg)";
    }
  });

  for (let i = 0; i < budgetOptionsValues.length; i++) {
    budgetOptionsValues[i].addEventListener("click", function () {
      budgetSelectedText.textContent = this.textContent;
      budgetOptionsDiv.classList.add("hidden");
      if (customSelectIconBudget) customSelectIconBudget.style.transform = "rotate(0deg)";
    });
  }
}

window.addEventListener("click", function (e) {
  if (projectTypeInp) {
    let customOptionsDiv = projectTypeInp.nextElementSibling;
    let customSelectIconType = document.querySelector(".custom-select[data-name=project-type] i");

    if (!projectTypeInp.contains(e.target) && !customOptionsDiv.contains(e.target)) {
      customOptionsDiv.classList.add("hidden");
      if (customSelectIconType) customSelectIconType.style.transform = "rotate(0deg)";
    }
  }

  if (projectBudgetInp) {
    let budgetOptionsDiv = projectBudgetInp.nextElementSibling;
    let customSelectIconBudget = document.querySelector(".custom-select[data-name=budget] i");

    if (!projectBudgetInp.contains(e.target) && !budgetOptionsDiv.contains(e.target)) {
      budgetOptionsDiv.classList.add("hidden");
      if (customSelectIconBudget) customSelectIconBudget.style.transform = "rotate(0deg)";
    }
  }
});