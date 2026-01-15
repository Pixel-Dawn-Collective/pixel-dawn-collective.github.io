class PersonCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image");
    const name = this.getAttribute("name");
    const description = this.getAttribute("description");
    const instagram = this.getAttribute("instagram");
    const bluesky = this.getAttribute("bluesky");

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
            </a> / <a href="${bluesky}" target="_blank" rel="noopener">
              <img
                src="https://cdn.simpleicons.org/bluesky/ffffff"
                alt="Bluesky"
                class="icon"
              />
              <span>Bluesky</span>
            </a>
          </div>
      `;
  }
}

customElements.define("person-card", PersonCard);
