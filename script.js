document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector("table");
  const rows = table.querySelectorAll("tr");
  const rowsPerPage = 10;
  let currentPage = 1;

  function showPage(page) {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    rows.forEach(function (row, index) {
      if (index >= startIndex && index < endIndex) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  }

  function createPagination() {
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    const pagination = document.createElement("div");
    pagination.className = "pagination";

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.textContent = i;

      if (i === currentPage) {
        pageLink.className = "active";
      }

      pageLink.addEventListener("click", function (event) {
        event.preventDefault();
        currentPage = i;
        showPage(currentPage);

        const currentActive = pagination.querySelector(".active");
        currentActive.classList.remove("active");
        this.className = "active";
      });

      pagination.appendChild(pageLink);
    }

    document.body.appendChild(pagination);
  }

  showPage(currentPage);
  createPagination();
});
