document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");

    // Ejemplo de posts (luego se reemplaza por CMS)
    const posts = [
        {
            title: "Confeti descubre una caja nueva",
            link: "posts/ejemplo-post-1.html"
        }
    ];

    posts.forEach(post => {
        const div = document.createElement("div");
        div.innerHTML = `<a href="${post.link}">${post.title}</a>`;
        postsContainer.appendChild(div);
    });
});
