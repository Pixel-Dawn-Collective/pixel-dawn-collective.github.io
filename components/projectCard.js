class ProjectCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image");
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const href = this.getAttribute("href");

    this.innerHTML = `
          <img src="${image}" alt="${title}" />
          <div class="description">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
          <div class="links">
            <a href="${href}" target="_blank">
              <img
                src="https://cdn.simpleicons.org/github/ffffff"
                alt="GitHub"
                class="icon"
              />
              <span>View on Github</span>
            </a>
          </div>
      `;
  }
}

customElements.define("project-card", ProjectCard);
