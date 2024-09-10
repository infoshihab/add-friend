const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const intro = document.querySelector(".intro");
const intro2 = document.querySelector(".intro2");
const next = document.querySelector(".next");
const back = document.querySelector(".back");
const profileImage = document.querySelector(".details-part img");
const profileName = document.querySelector(".demo-profile h3");
const introimg = document.querySelector(".introimg");
const names = document.querySelector(".name");
const posticon = document.querySelector(".postimg");
const love = document.querySelector(".fa-heart");
const storyscreen = document.querySelector(".full-screen");

//Add Friend section
const profiles = [
  {
    name: "Shihab Uddin",
    img: "https://images.unsplash.com/photo-1641943632479-3798ef1e14c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1543084951-1650d1468e2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    img: "https://images.unsplash.com/photo-1590496552566-41aca09db352?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alex Johnson",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

//Buttons all
let currentprofile = 0;
const showdp = (index) => {
  profileImage.src = profiles[index].img;
  profileName.textContent = profiles[index].name;
  introimg.src = profiles[index].img;
  names.textContent = profiles[index].name;
};
back.style.display = "none";
next.addEventListener("click", () => {
  currentprofile += 1;
  back.style.display = "block";
  showdp(currentprofile);
});

back.addEventListener("click", () => {
  currentprofile -= 1;
  showdp(currentprofile);
});
intro.style.display = "block";
intro2.style.display = "none";

add.addEventListener("click", () => {
  intro.style.display = "none";
  intro2.style.display = "block";
});
remove.addEventListener("click", () => {
  intro.style.display = "block";
  intro2.style.display = "none";
});

//style of clicking on post
posticon.addEventListener("dblclick", () => {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});

//Story section
const varr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1669850858893-068d0a6bf144?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1669850858880-d88baa3d24d8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1722019567841-fa4d11c8bab7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1722019567925-2e9388efba4b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1664875849419-3dc59ec24433?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1664876514376-e684971ec8d3?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1664874602608-e2cef2ecf5c0?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1584598665938-079ecb78d906?q=80&w=1017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var story = document.querySelector(".profile");
var varcall = "";

varr.forEach((elem, idx) => {
  varcall += ` <div class="story">
            <img
               <img id="${idx}" src="${elem.dp}" alt="" />
            />
          </div>`;
});
story.innerHTML = varcall;

story.addEventListener("click", (dets) => {
  storyscreen.style.display = "block";
  storyscreen.style.backgroundImage = `url(${varr[dets.target.id].story})`;
  setTimeout(() => {
    storyscreen.style.display = "none";
  }, 2500);
});
