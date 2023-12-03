function getData() {
  const list = document.querySelector(".list");

  fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((child) => {
        const item = document.createElement("div");
        item.classList = "item max-w-260px";
        item.innerHTML = `
                  
        <div class="top relative">
          <img
            src=${child.image}
            class="rounded-xl"
            alt=""
          />
          <div
            class="txt bg-yellow text-black py-5px px-10px absolute top-10px left-10px rounded-xl text-sm ${
              child.popular ? "" : "hidden"
            }"
          >
            Popular
          </div>
        </div>
        <div class="bottom mt-10px">
          <header class="flex justify-between items-center">
            <p class="text-white">${child.name}</p>
            <div class="cost bg-lime rounded-xl">
              <p class="py-5px px-10px text-sm text-black font-medium">
              ${child.price}
              </p>
            </div>
          </header>
          <header class="flex justify-between items-center mt-5px">
          <div class='flex items-center'>
            <img src="img/Star_fill.svg" alt="" />
           <p class="font-medium text-sm text-white ml-5px">${child.rating}</p>
           <p class="font-medium text-sm text-lightGray ml-5px">
             (${child.votes} votes)
           </p>
           </div>
           <p class='text-sm text-red font-medium'>${
             child.available ? "" : "Sold Out"
           }</p>
          </header>
        </div>`;
        console.log(child);
        list.appendChild(item);
      });
      const x = list.children.length;
      list.children[x - 1].classList.add("col-start-3");
      list.children[x - 2].classList.add("col-start-2");
    });
}
getData();

function filter() {
  const allProducts = document.querySelector(".all-products"); // All Products Btn
  const availableNow = document.querySelector(".available-now"); // Avaible Now Btn
  const list = document.querySelector(".list"); // list container (include coffees)

  availableNow.addEventListener("click", function () {
    allProducts.classList.remove("active");
    availableNow.classList.add("active");

    const list = document.querySelector(".list");
    list.innerHTML = "";

    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((child) => {
          const item = document.createElement("div");
          item.classList = `item max-w-260px ${
            child.available ? "" : "hidden"
          }`;
          item.innerHTML = `
        <div class="top relative">
          <img
            src=${child.image}
            class="rounded-xl"
            alt=""
          />
          <div
            class="txt bg-yellow text-black py-5px px-10px absolute top-10px left-10px rounded-xl text-sm ${
              child.popular ? "" : "hidden"
            }"
          >
            Popular
          </div>
        </div>
        <div class="bottom mt-10px">
          <header class="flex justify-between items-center">
            <p class="text-white">${child.name}</p>
            <div class="cost bg-lime rounded-xl">
              <p class="py-5px px-10px text-sm text-black font-medium">
              ${child.price}
              </p>
            </div>
          </header>
          <header class="flex justify-between items-center mt-5px">
          <div class='flex items-center'>
            <img src="img/Star_fill.svg" alt="" />
           <p class="font-medium text-sm text-white ml-5px">${child.rating}</p>
           <p class="font-medium text-sm text-lightGray ml-5px">
             (${child.votes} votes)
           </p>
           </div>
           <p class='text-sm text-red font-medium'>${
             child.available ? "" : "Sold Out"
           }</p>
          </header>
        </div>`;
          console.log(child);
          list.appendChild(item);
        });
        const x = list.children.length;
        list.children[x - 1].classList.add("col-start-1");
      });
  });

  allProducts.addEventListener("click", function () {
    allProducts.classList.add("active");
    availableNow.classList.remove("active");
    list.innerHTML = "";
    getData();
  });
}
filter();
