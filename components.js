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
class PersonCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image");
    const name = this.getAttribute("name");
    const description = this.getAttribute("description");
    const instagram = this.getAttribute("instagram");

    this.innerHTML = `
          <img src="${image}" alt="${name}" />
          <div class="description">
            <h3>${name}</h3>
            <p>${description}</p>
          </div>
          <div class="links">
            <a href="${instagram}" target="_blank" rel="noopener">
              <img
                src="https://cdn.simpleicons.org/instagram/ffffff"
                alt="Instagram"
                class="icon"
              />
              <span>Instagram</span>
            </a> / <a href="${instagram}" target="_blank" rel="noopener">
              <img
                src="https://cdn.simpleicons.org/bluesky/ffffff"
                alt="Instagram"
                class="icon"
              />
              <span>Bluesky</span>
            </a>
          </div>
      `;
  }
}

customElements.define("person-card", PersonCard);

customElements.define("project-card", ProjectCard);
