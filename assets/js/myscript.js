gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


// Definisikan timeline
const tl = gsap.timeline({
  // onComplete: function () {
  //   // Aktifkan kembali scroll
  //   document.body.style.overflow = 'auto';
  //   document.documentElement.style.overflow = 'auto';
  //   console.log("Data Sudah Terload Semua dan Scroll Aktif");
  // }
});

// Step 1: Fade-in animasi untuk .box-1 dan .box
tl.fromTo(".box-1", { opacity: 0 }, { opacity: 1, duration: 0.5 })
  .fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5")

  // Step 2: Box-1 mengecil dan bergeser ke kiri
  .to(".box-1", {
    width: "10px",
    x: "-80px",
    duration: 1,
    onComplete: function () {
      gsap.to(".box-1", { rotation: 10, duration: 1 });
    },
  })

  // Step 3: Box mengecil dan bergeser ke kanan bersamaan dengan Box-1
  .to(
    ".box",
    {
      width: "10px",
      x: "80px",
      duration: 1,
      onComplete: function () {
        gsap.to(".box", { rotation: 10, duration: 1 });
      },
    },
    "-=1"
  )

  // Step 4: Teks 'my-name' muncul dengan efek fade-in
  .to(".my-name", { opacity: 1, duration: 1, ease: "power1.inOut" })
  .to(".my-proffesional", {
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
    // onComplete: function () {
    //   gsap.set(".my-proffesional", { color: "crimson", ease: "power1.inOut" });
    // },
  })
  .fromTo(".animation-teks", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 }, "-=1")
  .to(".animation-teks", { x: 400 })
  .to(".btn-12", { y: 0, opacity: 1, duration: 1, ease: "bounce.out" })
  .to(".scroll", { opacity: 1, duration: 1, ease: "power1.inOut" })
  .to(
    ".my-proffesional",
    {
      color: "crimson",
      ease: "power1.inOut",
      onComplete: () => {
        gsap.fromTo(".animation-teks", { opacity: 1 }, { opacity: 0, repeat: -1, duration: 0.8 });
      },
    },
    "-=2.51"
  )
  .to(".my-navbar", {
    opacity: 1,
    duration: 0.5,
    ease: "power1.inOut",
    onComplete: function () {
      console.log("Data Sudah Terload Semua");
    },
  })
  // Step 5: Animasi infinite untuk scroll svg dan h4
  .to(".scroll", {
    opacity: 1, // Mengubah opacity menjadi 1
    duration: 1, // Durasi perubahan opacity selama 1 detik
    ease: "power1.inOut", // Efek easing yang halus
    onComplete: function () {
      // Step 2: Setelah opacity mencapai 1, mulai animasi gerakan infinite
      gsap.to([".scroll svg", ".scroll h4"], {
        y: 50, // Gerakan ke bawah 50px
        repeat: -1, // Ulangi animasi secara infinite
        yoyo: true, // Mainkan animasi dalam dua arah
        duration: 1, // Durasi setiap siklus animasi adalah 1 detik
        ease: "power1.inOut", // Efek easing
      });
    },
  });

gsap.fromTo(
  "#about-content",
  { opacity: 0, scale: 0.3 },
  {
    scrollTrigger: {
      trigger: "#about-content",
      start: "top bottom",
      end: "50px center",
      toggleActions: "play ",
      // scrub: true,
    },
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    onComplete: function () {
      let icon = gsap.timeline();
      icon.to(".instagram", { rotate: 360, color: "#d61378" }).to(".whatsapp", { rotate: 360, color: "#2dd654" }).to(".facebook", { rotate: 360, color: "#26ace0" });
    },
  }
);

function wrapLetters(textElement) {
  const text = textElement.innerText;
  textElement.innerHTML = text
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");
}

// Select the text element and wrap its letters in spans
const textContainer = document.getElementById("text");
wrapLetters(textContainer);

const pj = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: ".project-card",
    start: "top 50%",
    end: "bottom 50%",
    toggleActions: "play ",
  },
});

pj.fromTo(
  ".text-container span",
  { opacity: 0, y: 20, duration: 0.2 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: "power2.out",
  }
)
  .fromTo(
    ".project-card",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      stagger: 0.4,
      duration: 1,
    },
    "-=1.5"
  )
  .to(".project-card-after", {
    opacity: 0,
    duration: 0.4,
    ease: "power1.out",
    stagger: 0.4,
  });

const skl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skill",
    start: "top center",
    end: "bottom center",
    toggleActions: "play ",
    // markers:true,
  },
});

skl.fromTo(
    ".flip-card-inner",
    { rotationY: 0 },
    {
      rotationY: 180,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.5,
      onComplete: function () {
        gsap.fromTo(".data-skill", { opacity: 0 }, { opacity: 1 });
      },
    }
  )
  .fromTo(".progress-bar", { width: 0 }, {
    width: "100%", onComplete: function () {
    gsap.to(".skill-level", { opacity: 1 ,ease:"power2.out"});
  }});

  gsap.registerPlugin(MotionPathPlugin);
  const planes = document.querySelectorAll(".Plane");
  const paths = document.querySelectorAll(".pathway path");
  const cnt = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: "100px center",
      end: "bottom center",
      toggleActions: "play ",
      // markers: true,
    },
  });

  cnt
    .fromTo(".contact-container", { scale: 2,opacity:0 }, { scale: 1,opacity:1, stagger: 0.5 })
    // Animasi opacity pesawat SVG
    .fromTo(planes, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power1.out" })
    // Animasi motionPath pesawat SVG
    .to(planes, {
      delay: 0.5,
      motionPath: {
        path: function (index) {
          return paths[index];
        },
        align: function (index) {
          return paths[index];
        },
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 2.5,
      onComplete: function () {
        gsap.to(planes, { opacity: 0 });
      },
    })
    // Animasi tambahan untuk .contact-container
    .to(".contact-container", { border: "none", ease: "power3.out", duration: 0.5 })
    .fromTo(".contact-container-before", { opacity: 0 }, { opacity: 1, repeat: -1, yoyo: true, duration: 0.5 }, "-=0.5")
    .fromTo(".contact-data", { opacity: 0, y: 100 }, { opacity: 1, ease: "power2.out", duration: 2, y: 0 });