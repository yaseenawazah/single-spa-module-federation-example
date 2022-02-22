import jsLogo from "./js-logo.svg"

export const getRoutes = () => {
  return `<single-spa-router>
    <div class="container">
      <div>
        Host Single-spa <img src="${jsLogo}"></img>
      </div>
      <application name="header/header"></application>
      <application name="catalog/catalog"></application>
    </div>
  </single-spa-router>`
}