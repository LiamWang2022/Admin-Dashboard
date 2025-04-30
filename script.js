const data = [];

for (let i = 1; i <= 8; i++) {
  data.push({
    title: `Project ${i}`,
    description: `This is a cool project number ${i}. It demonstrates dynamic card generation using JavaScript.`,
    tagColor: "rgb(255, 193, 7)"
  });
}

const container = document.querySelector("#cardcontainer");

data.forEach(item => {
  container.innerHTML += `
    <div class="card" style="border-left: 15px solid ${item.tagColor}">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <div class="interactionMenu">
        <a href="#"><img src="icons/star-plus-outline.svg" alt="star"></a>
        <a href="#"><img src="icons/eye-plus.svg" alt="watch"></a>
        <a href="#"><img src="icons/source-fork.svg" alt="share"></a>
      </div>
    </div>
  `;
});
