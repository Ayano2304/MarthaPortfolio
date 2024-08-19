let navbar = document.querySelector(".my-navbar");

function adjustNavbar() {
  if (window.scrollY > 50) {
    navbar.style.marginTop = "0";
  } else {
    navbar.style.marginTop = "16px";
  }
}

// Run the function on page load
window.addEventListener("load", adjustNavbar);

// Also run the function when the user scrolls
window.addEventListener("scroll", adjustNavbar);
const sections = document.querySelectorAll("section"); // Dapatkan semua section
const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Dapatkan semua nav-link

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 100; // Tambahkan offset untuk menyesuaikan dengan tinggi navbar

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active")); // Hapus kelas 'active' dari semua nav-link
      navLinks[index].classList.add("active"); // Tambahkan kelas 'active' ke nav-link yang sesuai
    }
  });
});

document.querySelectorAll("nav .navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah perilaku default anchor tag
    const targetId = link.getAttribute("href").replace("#", ""); // Mengambil ID dari href
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      gsap.to(window, { duration: 1, scrollTo: { y: targetElement, offsetY: 70 } });
    }
  });
});

const wa = document.getElementById("whatsapp");
wa.addEventListener("click", () => {
  const number = 6281284853530;
  const url = `https://wa.me/${number}`;
  window.open(url, "_blank");
});

const telegramButton = document.getElementById("telegram");
telegramButton.addEventListener("click", () => {
  const number = "6289605360021"; // Replace with the actual number
  const url = `https://t.me/+${number}`;
  window.open(url, "_blank");
});

document.getElementById("copyButton").addEventListener("click", function () {
  // Get the text content from the <p> element
  const textToCopy = document.getElementById("textToCopy").textContent;

  // Create a temporary input element to hold the text
  const tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  // Select the text inside the input and copy it
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Optionally, provide feedback to the user
  alert("Text copied to clipboard!");
});
