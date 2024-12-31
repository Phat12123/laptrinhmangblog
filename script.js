// Hiệu ứng cuộn mượt
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Chức năng tìm kiếm bài viết
document.getElementById('search-bar').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');

    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const description = post.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            post.style.display = 'block'; // Hiển thị bài viết phù hợp
        } else {
            post.style.display = 'none'; // Ẩn bài viết không phù hợp
        }
    });
});
