import ScrollReveal from "scrollreveal";

// HAMBURGER BAR
const hamburger = document.querySelector(".hamburger");
const navigation = document.getElementById("navigation");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});
let isMenuOpen = false;

function hamburgerbar() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    navigation.setAttribute("style", "display:block");
  } else {
    navigation.setAttribute("style", "display:none");
  }
}
// SIGN UP | LOG IN PAGE
const idsignpage = document.getElementById("idsignpage");
const idsignpagelayer = document.getElementById("idsignpagelayer");
const idloginpage = document.getElementById("idloginpage");
const idloginpagelayer = document.getElementById("idloginpagelayer");

function signup() {
  idsignpagelayer.setAttribute("style", "display: block;");
  idsignpage.setAttribute(
    "style",
    "z-index: 101;  background-color: #00000099;"
  );
}
function signup2() {
  idsignpagelayer.setAttribute("style", "display: block;");
  idsignpage.setAttribute(
    "style",
    "z-index: 101;  background-color: #00000099;"
  );
}

function closesignpage() {
  idsignpagelayer.setAttribute("style", "display: none");
  idsignpage.setAttribute("style", "z-index: -1;");
  event.preventDefault();
}

function logindone() {
  idloginpagelayer.setAttribute("style", "display: none");
  idsignpagelayer.setAttribute("style", "display: none");
  idloginpage.setAttribute(
    "style",
    "z-index: -1; background-color: transparent;"
  );
  idsignpage.setAttribute(
    "style",
    "z-index: -1; background-color: transparent;"
  );
  document.getElementById("register").setAttribute("style", "display: none;");
  document
    .getElementById("userprofile")
    .setAttribute("style", "display: block");
  event.preventDefault();
}

function loginoverlay() {
  idloginpagelayer.setAttribute("style", "display: block");
  idloginpage.setAttribute("style", "z-index: 101;");
  idsignpagelayer.setAttribute("style", "display: none");
}

function closeloginpage() {
  idloginpagelayer.setAttribute("style", "display: none");
  idsignpagelayer.setAttribute("style", "display: none");
  idloginpage.setAttribute(
    "style",
    "z-index: -1; background-color: transparent;"
  );
  idsignpage.setAttribute(
    "style",
    "z-index: -1; background-color: transparent;"
  );
  event.preventDefault();
}
// ALERT ADD TO CART
function addtocart() {
  Swal.fire({
    title: "Add to Cart",
    icon: "success",
    draggable: true,
    background: "#f0f0d7",
  });
}
//ADD ITEMS OR REMOVE ITEMS (CARTPAGE.HTML)
function increment(button) {
  let container = button.closest(".listofitems1_2");
  let countInput = container.querySelector(".number");
  let count = parseInt(countInput.value);
  count++;
  countInput.value = count;
}

function decrement(button) {
  let container = button.closest(".listofitems1_2");
  let countInput = container.querySelector(".number");
  let count = parseInt(countInput.value);
  if (count > 0) {
    count--;
    countInput.value = count;
  }
}
// CEK INPUT CHECKBOX (CARTPAGE.HTML)
const masterSelect = document.getElementById("select-all-item");

masterSelect.addEventListener("change", function () {
  document
    .querySelectorAll(".select-all, .product-checkbox")
    .forEach((cb) => (cb.checked = this.checked));
});

function updateMasterCheckbox() {
  const allSelected = Array.from(
    document.querySelectorAll(".select-all")
  ).every((cb) => cb.checked);
  masterSelect.checked = allSelected;
}

document.querySelectorAll(".shopname1").forEach((group) => {
  const selectAll = group.querySelector(".select-all");
  const checkboxes = group.querySelectorAll(".product-checkbox");

  selectAll.addEventListener("change", function () {
    checkboxes.forEach((cb) => (cb.checked = this.checked));
    updateMasterCheckbox();
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      selectAll.checked = Array.from(checkboxes).every((cb) => cb.checked);
      updateMasterCheckbox();
    });
  });
});
// HREF TO REVIEW ITEM (INDEX.HTML)
function reviewitem() {
  window.location.href = "productreview.html";
}
// SAVE PROFILE (USERPROFILE.HTML)
function savechange() {
  Swal.fire({
    title: "Do you want to save the changes?",
    showCancelButton: true,
    confirmButtonText: "Save",
    background: "#f0f0d7",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Saved!",
        text: "Your changes have been saved.",
        icon: "success",
        background: "#f0f0d7", // Warna hijau muda
      });
    }
  });
}
// LOGOUT BUTTON (USER PROFILE.HTML)
function logout() {
  Swal.fire({
    title: "Are you sure to logout?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: "Cancel",
    background: "#f0f0d7",
  }).then((result) => {
    if (result.isConfirmed) {
      // Pastikan memeriksa result.isConfirmed
      window.location.href = "index.html"; // Alihkan halaman
    }
  });
}
//BUTTON CONFIRM EXCHANGE (CONFIRMEXCHANGE.HTML)
function confirmexchange() {
  Swal.fire({
    title: "Are you sure want to exchange?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `Cancel`,
    background: "#f0f0d7",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Waiting... Thank You",
        icon: "success",
        background: "#f0f0d7", // Warna hijau muda
      });
    }
  });
}
// (CHECKOUTPAGE.HTML)
function checkout() {
  Swal.fire({
    title: "Are you sure to continue checkout?? ?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `Cancel`,
    background: "#f0f0d7",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        title: "Thank You!",
        icon: "success",
        background: "#f0f0d7", // Warna hijau muda
      });
    }
  });
}
// BUY (REVIEWPRODUCT.HTML)
function buy() {
  window.location.href = "checkoutpage.html";
}
// OPEN CHAT V.ANDROID (CHATPAGE.HTML)
function enterchat() {
  document.querySelector(".container").setAttribute("style", "display: none;");
  document.querySelector(".chat").setAttribute("style", "display: block;");
}
// CLOSE CHAT V.ANDROID (CHATPAGE.HTML)
function backchat() {
  document.querySelector(".container").setAttribute("style", "display: block;");
  document.querySelector(".chat").setAttribute("style", "display: none;");
}
// SCROLL REVEAL (INDEX.HTML)
ScrollReveal().reveal(".shirtcard, .exchange-container", {
  duration: 400, // Durasi animasi (ms)
  scale: 0.5, // Skala awal sebelum muncul (0.5 berarti 50% ukuran normal)
  origin: "bottom", // Efek masuk dari bawah (opsional)
  distance: "50px", // Jarak gerakan elemen (opsional)
  easing: "ease-in-out", // Efek pergerakan lebih halus
  interval: 70,
  reset: true, // Jika true, animasi akan terjadi setiap kali elemen masuk viewport
});
