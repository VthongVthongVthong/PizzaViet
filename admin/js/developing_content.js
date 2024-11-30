document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href="#"]').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Tính năng đang phát triển");
        });
    });
});