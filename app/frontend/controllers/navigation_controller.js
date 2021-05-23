import ApplicationController from "./application_controller"

export default class extends ApplicationController {
  contentEl = document.getElementById("content-wrapper")

  scroll(e) {
    e.preventDefault()
    const index = e.target.href.lastIndexOf("#")
    const hash = e.target.href.substring(index + 1)
    const section = document.querySelector(`a[name=${hash}]`)
    const top = parseInt(getComputedStyle(this.element).top)

    this.contentEl.scrollTo({
      top: section.offsetTop + top - 1,
      behavior: "smooth"
    })
  }
}
