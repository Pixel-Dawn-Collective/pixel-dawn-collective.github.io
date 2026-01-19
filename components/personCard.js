class PersonCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image");
    const name = this.getAttribute("name");
    const description = this.getAttribute("description");
    const instagram = this.getAttribute("instagram");
    const bluesky = this.getAttribute("bluesky");

    this.setAttribute("role", "article");
    this.setAttribute("aria-labelledby", `${this.id}-name`);

    this.innerHTML = `
      <img
        class="person-image"
        src="${image}"
        alt=""
        aria-hidden="true"
      />

      <div class="description">
        <h3 id="${this.id}-name">${name}</h3>
        <p>${description}</p>

        <div class="links">
          <ul>
            <li>
              <a
                href="${instagram}"
                target="_blank"
                rel="noopener"
                aria-label="Visit ${name}'s Instagram profile (opens in a new tab)"
              >
                <img
                  src="https://cdn.simpleicons.org/instagram/ffffff"
                  alt=""
                  aria-hidden="true"
                  class="icon"
                />
                <span>Instagram</span>
              </a>
              </li>
              <li>
              <a
                href="${bluesky}"
                target="_blank"
                rel="noopener"
                aria-label="Visit ${name}'s Bluesky profile (opens in a new tab)"
              >
                <img
                  src="https://cdn.simpleicons.org/bluesky/ffffff"
                  alt=""
                  aria-hidden="true"
                  class="icon"
                />
                <span>Bluesky</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define("person-card", PersonCard);
