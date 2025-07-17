document.addEventListener("DOMContentLoaded", () => {
  // === ELEMENTLER ===
  /* const cartCount = document.getElementById("cart-count");
  const buttons = document.querySelectorAll(".sepete-ekle");
  const popup = document.getElementById("popup");
  const sepetAlani = document.getElementById("sepet-alani");
  const toplamFiyat = document.getElementById("toplam-fiyat");
  const odemeBtn = document.querySelector(".odeme-btn");
  const toplamText = document.querySelector(".toplam-tutar");
  const form = document.getElementById("odeme-formu");

  const fiyatlar = {
    "Natrum Muriaticum": 80,
    "Carcinosin": 80,
    "Tuberculinum": 80
  };

  let sepet = JSON.parse(localStorage.getItem("sepet")) || {};

  function guncelleCartCount() {
    const toplamAdet = Object.values(sepet).reduce((a, b) => a + b, 0);
    if (cartCount) cartCount.textContent = toplamAdet;
    localStorage.setItem("cartCount", toplamAdet);
  }

  function kaydetVeYenile() {
    localStorage.setItem("sepet", JSON.stringify(sepet));
    guncelleCartCount();
    guncelleSepetGorunumu();
  }

  function kontrolEtSepetBosMu() {
    const toplamUrunSayisi = Object.values(sepet).reduce((a, b) => a + b, 0);
    if (toplamUrunSayisi === 0) {
      if (odemeBtn) {
        const yeniBtn = document.createElement("a");
        yeniBtn.href = "index.html";
        yeniBtn.className = "odeme-btn";
        yeniBtn.innerText = "Anasayfaya Dön";
        odemeBtn.replaceWith(yeniBtn);
      }
      if (toplamText) {
        toplamText.textContent = "Toplam: 0 ₺";
      }
    }
  }

  function guncelleSepetGorunumu() {
    if (!sepetAlani) return;
    sepetAlani.innerHTML = "";

    let toplam = 0;
    for (const urun in sepet) {
      const adet = sepet[urun];
      const fiyat = fiyatlar[urun] * adet;
      toplam += fiyat;

      const urunDiv = document.createElement("div");
      urunDiv.className = "sepet-urun";
      urunDiv.innerHTML = \`
        <div class="urun-adi">\${urun}</div>
        <div class="adet-kontrol">
          <button class="azalt">−</button>
          <span>\${adet}</span>
          <button class="arttir">+</button>
        </div>
        <button class="sil-btn">Sil</button>
      \`;

      urunDiv.querySelector(".arttir").addEventListener("click", () => {
        sepet[urun]++;
        kaydetVeYenile();
      });

      urunDiv.querySelector(".azalt").addEventListener("click", () => {
        if (sepet[urun] > 1) {
          sepet[urun]--;
        } else {
          delete sepet[urun];
        }
        kaydetVeYenile();
      });

      urunDiv.querySelector(".sil-btn").addEventListener("click", () => {
        delete sepet[urun];
        kaydetVeYenile();
      });

      sepetAlani.appendChild(urunDiv);
    }

    if (toplamFiyat) toplamFiyat.textContent = toplam;
    guncelleCartCount();
    kontrolEtSepetBosMu();
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const urun = button.getAttribute("data-urun");
      if (!sepet[urun]) sepet[urun] = 0;
      sepet[urun]++;
      kaydetVeYenile();

      if (popup) {
        popup.classList.add("show");
        setTimeout(() => {
          popup.classList.remove("show");
        }, 8000);
      }
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ödeme başarılı! Teşekkür ederiz.");
      localStorage.removeItem("sepet");
      localStorage.removeItem("cartCount");
      window.location.href = "tesekkur.html";
    });
  }

  guncelleCartCount();
  guncelleSepetGorunumu();
  */

  // === SLIDER ===
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function gosterSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  if (slides.length > 0) {
    gosterSlide(currentSlide);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      gosterSlide(currentSlide);
    }, 6000);
  }

  // === HAMBURGER MENÜ ===
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const nav = document.querySelector(".nav");

  if (hamburgerBtn && nav) {
    hamburgerBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // === ÇEREZ BİLDİRİMİ ===
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAccept = document.getElementById("cookie-accept");

  if (cookieBanner && !localStorage.getItem("cookieAccepted")) {
    cookieBanner.classList.remove("hide");
  }

  if (cookieAccept) {
    cookieAccept.addEventListener("click", () => {
      localStorage.setItem("cookieAccepted", "true");
      cookieBanner.classList.add("hide");
    });
  }
});

// === BLOK AKORDEONLAR ===
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#turkiyede-homeopati .accordion-toggle");
  const content = document.querySelector("#turkiyede-homeopati .accordion-content");

  if (toggle && content) {
    toggle.addEventListener("click", () => {
      const isOpen = content.style.display === "block";
      content.style.display = isOpen ? "none" : "block";
      toggle.textContent = isOpen ? "Devamını Gör ↓" : "Kapat ↑";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const accordionBtn = document.querySelector("#hikayem .accordion");
  const panel = document.querySelector("#hikayem .panel");

  if (accordionBtn && panel) {
    accordionBtn.addEventListener("click", function () {
      this.classList.toggle("active");

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.classList.remove("show");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add("show");
      }
    });
  }
});

const hikayeToggle = document.querySelector("#homeopati-hikaye .accordion-toggle");
const hikayeContent = document.querySelector("#homeopati-hikaye .accordion-content");

if (hikayeToggle && hikayeContent) {
  hikayeToggle.addEventListener("click", function () {
    const isOpen = hikayeContent.style.display === "block";
    hikayeContent.style.display = isOpen ? "none" : "block";
    hikayeToggle.textContent = isOpen ? "Devamını Gör ↓" : "Kapat ↑";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".akordeon-baslik");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      this.classList.toggle("aktif");
      const content = this.nextElementSibling;

      if (content && content.style.maxHeight) {
        content.style.maxHeight = null;
      } else if (content) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
