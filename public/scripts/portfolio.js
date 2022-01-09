//@ts-check

const portfolio_section = document.getElementById("portfolio-entries")

class PortfolioEntry {
    constructor(name, description, repo_link, image) {
        this.name = capitalizeFirstLetter(name)
        this.description = description
        this.repo_link = repo_link
        this.image = image

        const dom_element = document.createElement("li")
        dom_element.classList.add("portfolio-entry")

        const dom_name = document.createElement("h2")
        dom_name.innerHTML = this.name
        dom_element.appendChild(dom_name)

        const dom_description = document.createElement("h5")
        dom_description.innerHTML = this.description
        dom_element.appendChild(dom_description)

        portfolio_section.appendChild(dom_element)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


async function fetch_projects() {
    const res = await fetch("https://api.github.com/users/hugobde/starred?sort=updated")
    const res_json = await res.json()
    for(let repo of res_json) {
        new PortfolioEntry(repo.name, repo.description, repo.html_url, "")
    }
}

fetch_projects()