document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector("table");
  const rows = table.querySelectorAll("tr");
  const headerRow = table.querySelector("tr:first-child"); // Select the header row
  const rowsPerPage = 15;
  let currentPage = 1;

  function showPage(page) {
    const startIndex = (page - 1) * rowsPerPage + 1; // +1 to skip header row
    const endIndex = startIndex + rowsPerPage - 1; // -1 as startIndex now counts the header row

    rows.forEach(function (row, index) {
      if (index === 0) {
        // Skip the header row
        return;
      }

      if (index >= startIndex && index <= endIndex) {
        // <= endIndex as endIndex is now the actual last index
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  }

  function createPagination() {
    const totalPages = Math.ceil((rows.length - 1) / rowsPerPage); // Exclude the header row
    const pagination = document.createElement("footer");
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
