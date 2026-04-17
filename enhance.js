document.addEventListener("DOMContentLoaded", () => {
  // Floating WhatsApp button (site-wide)
  const waBtn = document.createElement("a");
  waBtn.className = "floating-wa";
  waBtn.href = "https://wa.me/447570086987";
  waBtn.target = "_blank";
  waBtn.rel = "noopener noreferrer";
  waBtn.setAttribute("aria-label", "Chat with Kerala Unani Wellness Clinic on WhatsApp");
  waBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
    </svg>
  `;
  document.body.appendChild(waBtn);

  // Subtle section reveal
  const revealSelectors = [
    ".section-shell",
    ".service-card",
    ".about-teaser",
    ".pillar",
    ".testimonial-inner",
    ".video-showcase",
    ".faq-item",
    ".story-grid",
    ".doctor-grid",
    ".contact-grid",
    ".gallery-intro"
  ];
  const revealNodes = document.querySelectorAll(revealSelectors.join(", "));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    revealNodes.forEach((node) => node.classList.add("reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -12% 0px" }
    );
    revealNodes.forEach((node) => observer.observe(node));
  }

  // Image loading optimization
  const allImages = Array.from(document.querySelectorAll("img"));
  allImages.forEach((img) => {
    const inHero = Boolean(img.closest(".hero, .page-hero"));
    if (inHero) {
      img.loading = "eager";
      img.fetchPriority = "high";
    } else {
      img.loading = "lazy";
      img.fetchPriority = "low";
    }
    img.decoding = "async";
  });

  // Gallery skeleton loading state
  const galleryCards = Array.from(document.querySelectorAll(".gallery-item"));
  galleryCards.forEach((card) => {
    const image = card.querySelector("img");
    if (!image) return;
    card.classList.add("loading");
    const markLoaded = () => {
      card.classList.remove("loading");
      card.classList.add("img-loaded");
    };
    if (image.complete) {
      markLoaded();
    } else {
      image.addEventListener("load", markLoaded, { once: true });
      image.addEventListener("error", markLoaded, { once: true });
    }
  });

  // Mobile menu toggle
  const nav = document.querySelector("nav");
  const navToggle = document.querySelector(".nav-toggle");
  if (nav) {
    const syncScrolledNav = () => {
      nav.classList.toggle("nav-scrolled", window.scrollY > 60);
    };
    let navTicking = false;
    const onScrollNav = () => {
      if (navTicking) return;
      navTicking = true;
      window.requestAnimationFrame(() => {
        syncScrolledNav();
        navTicking = false;
      });
    };
    syncScrolledNav();
    window.addEventListener("scroll", onScrollNav, { passive: true });
  }
  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(nav.classList.contains("nav-open")));
    });
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Testimonial carousel
  const slides = Array.from(document.querySelectorAll(".testimonial-slide"));
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));
  if (slides.length > 0) {
    let activeIndex = 0;
    const setSlide = (index) => {
      slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
      activeIndex = index;
    };
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => setSlide(index));
    });
    setInterval(() => {
      setSlide((activeIndex + 1) % slides.length);
    }, 4200);
  }

  // FAQ accordion
  const faqItems = Array.from(document.querySelectorAll(".faq-item"));
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    if (!trigger || !content) return;
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach((other) => {
        const otherTrigger = other.querySelector(".faq-trigger");
        const otherContent = other.querySelector(".faq-content");
        if (!otherTrigger || !otherContent) return;
        other.classList.remove("open");
        otherTrigger.setAttribute("aria-expanded", "false");
        otherContent.style.maxHeight = "0px";
      });
      if (!isOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });

  // Gallery lightbox
  const galleryImages = Array.from(document.querySelectorAll(".gallery-item img"));
  if (galleryImages.length > 0) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image preview">×</button><img alt="Gallery preview">';
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const closeLightbox = () => lightbox.classList.remove("open");

    galleryImages.forEach((image) => {
      image.style.cursor = "zoom-in";
      image.addEventListener("click", () => {
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt || "Clinic image preview";
        lightbox.classList.add("open");
      });
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.classList.contains("lightbox-close")) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLightbox();
    });
  }

});
