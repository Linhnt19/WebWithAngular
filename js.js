document.addEventListener("DOMContentLoaded", function() {
    var documentationLink = document.getElementById("documentation-link");
    var documentationContent = document.getElementById("documentation-content");
  
    documentationLink.addEventListener("click", function(event) {
      event.preventDefault(); // Ngăn chặn chuyển hướng khi nhấp vào liên kết
      documentationContent.classList.toggle("hidden"); // Hiển thị hoặc ẩn nội dung khi nhấp vào liên kết
    });
  });
  