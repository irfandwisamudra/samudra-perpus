var index = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {
    index = 1;
  }
  x[index - 1].style.display = "block";
  setTimeout(carousel, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-inner");
  const navbar = document.querySelector("nav");
  const main = document.querySelector("main");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > header.offsetHeight) {
      if (scrollPosition > lastScrollTop && scrollPosition > navbar.offsetHeight) {
        navbar.classList.remove("fixed");
        main.style.marginTop = "0";
      } else {
        navbar.classList.add("fixed");
        main.style.marginTop = navbar.offsetHeight + "px";
      }
    } else {
      navbar.classList.remove("fixed");
      main.style.marginTop = "0";
    }
    main.style.transition = "margin-top 0s";
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close-btn");
  const menuLinks = document.querySelectorAll(".menu > a");
  const dropdownLinks = document.querySelectorAll(".dropdown-content > a");
  const dropdownContent = document.querySelector(".dropdown-content");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    closeBtn.classList.toggle("active");
    dropdownContent.classList.remove("active");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("active");
    closeBtn.classList.remove("active");
  });

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
      closeBtn.classList.remove("active");
    });
  });

  dropdownLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
      closeBtn.classList.remove("active");
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      menu.classList.remove("active");
      closeBtn.classList.remove("active");
    }
  });

  const dropdownBtn = document.querySelector(".dropbtn");

  dropdownBtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("active");
  });

  const perpustakaanContainer = document.querySelector(".perpustakaan");

  const dataPerpustakaan = [
    {
      kategori: "Fiksi",
      buku: [
        {
          judul: "Harry Potter and the Sorcerer's Stone",
          penulis: "J.K. Rowling",
          tahun: 1997,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "To Kill a Mockingbird",
          penulis: "Harper Lee",
          tahun: 1960,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "1984",
          penulis: "George Orwell",
          tahun: 1949,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Pride and Prejudice",
          penulis: "Jane Austen",
          tahun: 1813,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "The Great Gatsby",
          penulis: "F. Scott Fitzgerald",
          tahun: 1925,
          gambar: "assets/img/book-cover.png",
        },
      ],
    },
    {
      kategori: "Non-Fiksi",
      buku: [
        {
          judul: "Sapiens: A Brief History of Humankind",
          penulis: "Yuval Noah Harari",
          tahun: 2014,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Educated",
          penulis: "Tara Westover",
          tahun: 2018,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "The Immortal Life of Henrietta Lacks",
          penulis: "Rebecca Skloot",
          tahun: 2010,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Becoming",
          penulis: "Michelle Obama",
          tahun: 2018,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "The Wright Brothers",
          penulis: "David McCullough",
          tahun: 2015,
          gambar: "assets/img/book-cover.png",
        },
      ],
    },
    {
      kategori: "Fantasi",
      buku: [
        {
          judul: "The Hobbit",
          penulis: "J.R.R. Tolkien",
          tahun: 1937,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "The Chronicles of Narnia",
          penulis: "C.S. Lewis",
          tahun: 1950,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "A Game of Thrones",
          penulis: "George R.R. Martin",
          tahun: 1996,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "The Name of the Wind",
          penulis: "Patrick Rothfuss",
          tahun: 2007,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Mistborn: The Final Empire",
          penulis: "Brandon Sanderson",
          tahun: 2006,
          gambar: "assets/img/book-cover.png",
        },
      ],
    },
    {
      kategori: "Romantis",
      buku: [
        {
          judul: "Pride and Prejudice",
          penulis: "Jane Austen",
          tahun: 1813,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Romeo and Juliet",
          penulis: "William Shakespeare",
          tahun: 1597,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "The Fault in Our Stars",
          penulis: "John Green",
          tahun: 2012,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Me Before You",
          penulis: "Jojo Moyes",
          tahun: 2012,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "P.S. I Love You",
          penulis: "Cecelia Ahern",
          tahun: 2004,
          gambar: "assets/img/book-cover.png",
        },
      ],
    },
    {
      kategori: "Misteri",
      buku: [
        {
          judul: "The Girl with the Dragon Tattoo",
          penulis: "Stieg Larsson",
          tahun: 2005,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Gone Girl",
          penulis: "Gillian Flynn",
          tahun: 2012,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "The Da Vinci Code",
          penulis: "Dan Brown",
          tahun: 2003,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Sherlock Holmes",
          penulis: "Arthur Conan Doyle",
          tahun: 1887,
          gambar: "assets/img/book-cover.png",
        },
        {
          judul: "Big Little Lies",
          penulis: "Liane Moriarty",
          tahun: 2014,
          gambar: "assets/img/book-cover.png",
        },
      ],
    },
  ];

  document.addEventListener("click", function (event) {
    const isClickInsideDropdown = dropdownContent.contains(event.target);
    const isClickOnDropdownToggle = document
      .querySelector(".dropbtn")
      .contains(event.target);

    if (!isClickInsideDropdown && !isClickOnDropdownToggle) {
      dropdownContent.classList.remove("active");
    }
  });

  dataPerpustakaan.forEach((kategoriData) => {
    const dropdownItem = document.createElement("a");
    dropdownItem.href = `#${kategoriData.kategori}`;
    dropdownItem.textContent = kategoriData.kategori;
    dropdownItem.addEventListener("click", function () {
      menu.classList.remove("active");
      closeBtn.classList.remove("active");
      dropdownContent.classList.remove("active");
    });
    dropdownContent.appendChild(dropdownItem);
  });

  dataPerpustakaan.forEach((kategoriData) => {
    const kategoriBox = document.createElement("div");
    kategoriBox.classList.add("kategori-box");
    kategoriBox.id = kategoriData.kategori;

    const kategoriArticle = document.createElement("article");
    kategoriArticle.classList.add("kategori");

    const kategoriHeading = document.createElement("h2");
    kategoriHeading.textContent = kategoriData.kategori;

    kategoriArticle.appendChild(kategoriHeading);

    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    kategoriArticle.appendChild(bookContainer);

    kategoriData.buku.forEach((bukuData) => {
      const linkImage = document.createElement("a");
      linkImage.href = "#";

      const bukuArticle = document.createElement("article");
      bukuArticle.classList.add("buku");

      const bukuImage = document.createElement("img");
      bukuImage.src = bukuData.gambar;
      bukuImage.alt = bukuData.judul;

      const bukuTitle = document.createElement("h3");
      bukuTitle.textContent = bukuData.judul;

      const bukuAuthor = document.createElement("p");
      bukuAuthor.textContent = `Penulis: ${bukuData.penulis}`;

      const bukuYear = document.createElement("p");
      bukuYear.textContent = `Tahun Terbit: ${bukuData.tahun}`;

      bukuArticle.appendChild(bukuImage);
      bukuArticle.appendChild(bukuTitle);
      bukuArticle.appendChild(bukuAuthor);
      bukuArticle.appendChild(bukuYear);

      linkImage.appendChild(bukuArticle);
      bookContainer.appendChild(linkImage);

      kategoriBox.appendChild(kategoriArticle);
    });

    perpustakaanContainer.appendChild(kategoriBox);
  });
});
