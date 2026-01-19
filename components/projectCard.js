class ProjectCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image");
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const href = this.getAttribute("href");

    const titleId = `${this.id}-title`;
    const descId = `${this.id}-description`;

    this.setAttribute("role", "article");
    this.setAttribute("aria-labelledby", titleId);
    this.setAttribute("aria-describedby", descId);

    this.innerHTML = `
      <img
        src="${image}"
        alt=""
        aria-hidden="true"
        class="project-image"
      />

      <div class="description">
        <h3 id="${titleId}">${title}</h3>
        <p id="${descId}">${description}</p>
      </div>

      <div class="links">
        <a
          href="${href}"
          target="_blank"
          rel="noopener"
          aria-label="View ${title} project on GitHub (opens in a new tab)"
        >
          <img
            src="https://cdn.simpleicons.org/github/ffffff"
            alt=""
            aria-hidden="true"
            class="icon"
          />
          <span>View on GitHub</span>
        </a>
      </div>
    `;
  }
}

customElements.define("project-card", ProjectCard);
