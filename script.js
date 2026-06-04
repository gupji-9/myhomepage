// =============================================================
// 공통 스크립트 파일(script.js)
// - 현재 연도 자동 표시
// - 현재 페이지 nav 활성화
// - 모바일 메뉴 열기/닫기
// - Home 슬로건 변경
// - 맨 위로 이동 버튼
// - Contact 폼 확인 메시지
// - 실습 하위 페이지에서 Practice 메뉴 활성화
// =============================================================

document.addEventListener("DOMContentLoaded", function () {
  // 푸터의 연도를 현재 연도로 자동 표시합니다.
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 현재 페이지와 같은 nav 링크에 active 클래스를 추가합니다.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");
  const practicePages = [
    "practice.html",
    "dday.html",
    "random.html",
    "dom_style.html",
    "dom_list.html",
    "event_order.html",
    "event_car.html",
  ];

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (linkPage === "practice.html" && practicePages.includes(currentPage))
    ) {
      link.classList.add("active");
    }
  });

  // 모바일 화면에서 메뉴 버튼을 누르면 nav 링크가 열리고 닫힙니다.
  const menuBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector(".nav-links");

  if (menuBtn && navList) {
    menuBtn.addEventListener("click", function () {
      navList.classList.toggle("open");
    });
  }

  // Home 페이지의 슬로건을 버튼 클릭 시 변경합니다.
  const slogan = document.getElementById("slogan");
  const changeSloganBtn = document.getElementById("changeSloganBtn");
  const slogans = [
    "정보보안에 관심 있는 컴퓨터정보공학부 대학생입니다.",
    "배운 것을 직접 구현하며 성장하는 개발자를 꿈꿉니다.",
    "안전하고 편리한 웹 서비스를 만드는 것이 목표입니다.",
    "작은 프로젝트부터 꾸준히 완성해 나가겠습니다.",
    "JavaScript 실습을 포트폴리오로 확장하고 있습니다.",
  ];
  let sloganIndex = 0;

  if (slogan && changeSloganBtn) {
    changeSloganBtn.addEventListener("click", function () {
      sloganIndex = (sloganIndex + 1) % slogans.length;
      slogan.textContent = slogans[sloganIndex];
    });
  }

  // 스크롤이 내려가면 맨 위로 이동 버튼을 보여줍니다.
  const topBtn = document.getElementById("topBtn");

  if (topBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 350) {
        topBtn.classList.add("show");
      } else {
        topBtn.classList.remove("show");
      }
    });

    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Contact 페이지의 폼은 실제 전송 대신 확인 메시지를 보여줍니다.
  const contactForm = document.querySelector(".contact-form");
  const formResult = document.getElementById("formResult");

  if (contactForm && formResult) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      formResult.textContent =
        "메시지가 입력되었습니다. 실제 전송 기능은 서버 연결 후 추가할 수 있습니다.";
      contactForm.reset();
    });
  }
});
