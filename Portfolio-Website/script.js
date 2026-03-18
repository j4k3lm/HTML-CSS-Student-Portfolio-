document.addEventListener("DOMContentLoaded", function () {

  /* ---------------- HOME PAGE ---------------- */

  var changeHomeTextButton = document.getElementById("change-home-text-button");
  var homeIntroductionText = document.getElementById("home-introduction-text");
  var toggleSkillsSectionButton = document.getElementById("toggle-skills-section-button");
  var skillsSection = document.getElementById("skills");
  var highlightSkillsButton = document.getElementById("highlight-skills-button");

  if (changeHomeTextButton && homeIntroductionText) {
    changeHomeTextButton.addEventListener("click", function () {
      homeIntroductionText.textContent =
        "I am now learning how to use JavaScript DOM manipulation.";
    });
  }

  if (toggleSkillsSectionButton && skillsSection) {
    toggleSkillsSectionButton.addEventListener("click", function () {
      if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
      } else {
        skillsSection.style.display = "none";
      }
    });
  }

  if (highlightSkillsButton) {
    highlightSkillsButton.addEventListener("click", function () {
      var allSkillCards = document.querySelectorAll(".skill-card");

      allSkillCards.forEach(function (singleSkillCard) {
        singleSkillCard.classList.toggle("highlighted-card");
      });
    });
  }

  /* ---------------- ABOUT PAGE ---------------- */

  var changeBiographyButton = document.getElementById("change-biography-button");
  var biographyParagraph = document.getElementById("biography-paragraph");
  var toggleCareerGoalsButton = document.getElementById("toggle-career-goals-button");
  var careerGoalsSection = document.getElementById("career-goals-section");

  if (changeBiographyButton && biographyParagraph) {
    changeBiographyButton.addEventListener("click", function () {
      biographyParagraph.textContent =
        "I am a student who is still learning step by step. I want to improve my knowledge in HTML, CSS, and JavaScript so I can build better websites in the future.";
    });
  }

  if (toggleCareerGoalsButton && careerGoalsSection) {
    toggleCareerGoalsButton.addEventListener("click", function () {
      if (careerGoalsSection.style.display === "none") {
        careerGoalsSection.style.display = "block";
      } else {
        careerGoalsSection.style.display = "none";
      }
    });
  }

  /* ---------------- INTERESTS PAGE ---------------- */

  var changeInterestsTitleButton = document.getElementById("change-interests-title-button");
  var interestsMainTitle = document.getElementById("interests-main-title");
  var toggleInterestsSectionButton = document.getElementById("toggle-interests-section-button");
  var interestsSection = document.getElementById("interests-section");
  var highlightFavoriteInterestButton = document.getElementById("highlight-favorite-interest-button");
  var allInterestCards = document.querySelectorAll(".interest-card");

  if (changeInterestsTitleButton && interestsMainTitle) {
    changeInterestsTitleButton.addEventListener("click", function () {
      interestsMainTitle.textContent = "These Are My Favorite Interests";
    });
  }

  if (toggleInterestsSectionButton && interestsSection) {
    toggleInterestsSectionButton.addEventListener("click", function () {
      if (interestsSection.style.display === "none") {
        interestsSection.style.display = "grid";
      } else {
        interestsSection.style.display = "none";
      }
    });
  }

if (highlightFavoriteInterestButton) {
  highlightFavoriteInterestButton.addEventListener("click", function () {

    allInterestCards.forEach(function (singleInterestCard) {
      singleInterestCard.classList.toggle("highlighted-card");
    });

  });
}

  /* ---------------- COMMON EXAMPLE ---------------- */

  var firstPageTitle = document.querySelector("h1");

  if (firstPageTitle) {
    firstPageTitle.style.transition = "0.3s";
    firstPageTitle.addEventListener("mouseover", function () {
      firstPageTitle.style.transform = "scale(1.03)";
    });

    firstPageTitle.addEventListener("mouseout", function () {
      firstPageTitle.style.transform = "scale(1)";
    });
  }

});