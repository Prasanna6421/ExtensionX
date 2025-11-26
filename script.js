const extensions = [
  {
    id: 1,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    img: "./images/logo-devlens.png",
    active: true,
  },
  {
    id: 2,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    img: "./images/logo-markup-notes.png",
    active: true,
  },
  {
    id: 3,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    img: "./images/logo-console-plus.png",
    active: false,
  },
  {
    id: 4,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    img: "images/logo-devlens.png",
    active: true,
  },
  {
    id: 5,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    img: "images/logo-devlens.png",
    active: false,
  },
  {
    id: 6,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    img: "images/logo-dom-snapshot.png",
    active: false,
  },
  {
    id: 7,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    img: "images/logo-grid-guides.png",
    active: true,
  },
  {
    id: 8,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    img: "images/logo-json-wizard.png",
    active: false,
  },
  {
    id: 9,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    img: "images/logo-console-plus.png",
    active: true,
  },
  {
    id: 10,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    img: "images/logo-link-checker.png",
    active: true,
  },
  {
    id: 11,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    img: "images/logo-markup-notes.png",
    active: false,
  },
  {
    id: 12,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    img: "images/logo-devlens.png",
    active: true,
  },
];

const searchbtn = document.getElementById("searchbtn");
const container = document.getElementById("cont");

// function display(listItem){
//         container.innerHTML = " ";
//         listItem.forEach(m=>{
//                   container.innerHTML+=
//                `
//                  <div class="card">
//                  <div class="logo">
//                  <img src="/CSS practice/pine-apple.png" width="40px" height="40px"></div>
//                  <div class="content">
//                  <h2>${m.name}</h2>
//                   <p>${m.description}</p></div>

//                  <div class="toggle-switch ${m.active ? 'active' : ''}" onclick="toggle(${m.id})">
//                  <div class="knob"></div>
//                  </div>
//                   </div>

//                `
//         });
// };

function display(listItem) {
  container.innerHTML = listItem
    .map(
      (m) =>
        `
                 <div class="card">
      <div class="top-row">
        <div class="logo">
          <img src="${m.img}" width="30px" height="30px" alt="${m.name}">
        </div>
        <div class="content">
          <h2>${m.name}</h2>
          <p>${m.description}</p>
        </div>
      </div>

      <div class="bottom-row">
        <button class="remove-btn" onclick="removeExtension(${
          m.id
        })">Remove</button>

        <div class="toggle-switch ${
          m.active ? "active" : ""
        }" onclick="toggle(${m.id})">
          <div class="knob"></div>
        </div>
      </div>
    </div>
            
               
                 `
    )
    .join("");
}
display(extensions);

function removeExtension(id) {
  const index = extensions.findIndex((item) => item.id === id);
  if (index !== -1) extensions.splice(index, 1);
  display(extensions);
}

// function removeExtension(id) {
//    extensions = extensions.filter(item => item.id!==id);
//   display(extensions);
// }

function toggle(id) {
  let item = extensions.find((f) => f.id === id);
  item.active = !item.active;
  display(extensions);
}

function filter(type) {
  const buttons = document.querySelectorAll(".filter-btn");

  // remove 'selected' from all buttons
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // add 'selected' to the clicked button
  if (type === "all") buttons[0].classList.add("selected");
  if (type === "active") buttons[1].classList.add("selected");
  if (type === "inactive") buttons[2].classList.add("selected");

  if (type === "all") {
    display(extensions);
  } else if (type === "active") {
    display(extensions.filter((e) => e.active === true));
  } else if (type === "inactive") {
    display(extensions.filter((f) => f.active === false));
  }
}

display(extensions);

const themebtn = document.getElementById("t-btn");

function theme() {
  // Start fade-out animation
  document.body.classList.add("fade-out");

  setTimeout(() => {
    // Toggle theme after fade-out completes
    document.body.classList.toggle("light-theme");
    themebtn.classList.toggle("active");

    // Start fade-in
    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");

    // Remove fade-in class after animation ends
    setTimeout(() => {
      document.body.classList.remove("fade-in");
    }, 300);
  }, 300);
}

searchbtn.addEventListener("keyup", (event) => {
  const text = event.target.value.toLowerCase().trim();
  if (text === "") {
    return display(extensions);
  }
  const filt = extensions.filter((f) => f.name.toLowerCase().includes(text));
  display(filt);
});


function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card", "fadeUp"); // add animation class
  card.innerHTML = `<h3>${data.title}</h3><p>${data.desc}</p>`;
  
  card.addEventListener("animationend", () => {
    card.classList.remove("fadeUp"); // remove after animation
  });

  container.appendChild(card);
}







const widthSpan = document.getElementById("width");

function updateWidth() {
  widthSpan.textContent = window.innerWidth;
}

// Initial display
updateWidth();

// Update on resize
window.addEventListener("resize", updateWidth);

// const extensions = [
//   { id: 1, name: "DevLens" },
//   { id: 2, name: "StyleSpy" },
//   { id: 3, name: "CodeInspect" }
// ];

// const idToRemove = 4; // Non-existent id
// const index = extensions.findIndex(item => item.id === idToRemove);

// console.log("Index found:", index); // -1

// // No check
// if(index !==-1)
// extensions.splice(index, 1);

// console.log("Array after splice:", extensions);

// const extensions = [
//   { id: 1, name: "DevLens" },
//   { id: 2, name: "StyleSpy" },
//   { id: 3, name: "CodeInspect" }
// ];

// // Function to remove an item by id
// function removeExtension(id) {
//   // Create a new array excluding the item with the given id
//   const updatedExtensions = extensions.filter(item => item.id !== id);

//   // Display the updated array (or update your UI)
//   console.log(updatedExtensions);
// }

// // Example usage
// removeExtension(2);
