(function () {
  var $ = document.querySelector.bind(document);
  var body = document.querySelector("body");
  const cursorCustom = `<div class="cursor">
  <div class="cursor__ball cursor__ball--big">
    <svg height="30" width="30">
      <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
    </svg>
  </div>
</div>`;
  const logo = $("a.logo");
  logo.innerHTML = `<img src="https://cdn.duytan.edu.vn/images/icon/logo-duy-tan_vn.png" alt="logo">`;
  logo.href = "../sites/index.aspx?p=home_timetable&amp;functionid=13";

  const headerWrapper = $("#header-wrapper");
  const logout = `<div class="logout">
      <a href="../logout.aspx" title="Đăng xuất">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </a>
    </div>`;
  headerWrapper.insertAdjacentHTML("beforeend", logout);
  const styles = `<style>
a,
button {
  transition: all 0.3s;
}
a a{
  transition: none;
}

#header {
  background: #000;
  height:auto;
}
#header #header-wrapper {
  width: unset;
  height: auto;
background: rgba(255, 255, 255, 0.12);
}
#header #header-wrapper .header-top {
  background: transparent;
  width: 100%;
  display: flex;
      justify-content: space-between;
  align-items: center;
  padding: 10px 0;
    position:relative;
        max-width: 961px;
}
#header #header-wrapper .header-top .logo {
  float: unset;
  text-indent: 0;
  background: unset;
  padding: 10px;
  height: unset;
  margin-right: 30px;
}
#header #header-wrapper .header-top .logo img {
max-width: 135px;
}
#header #header-wrapper .header-top #nav{
  float: unset;
  height: unset;
  width: unset;
  margin-bottom: 3px;
}
#header #header-wrapper .header-top #nav li.first,
#header #header-wrapper .header-top #nav li {
  background: none;
  height: unset;
  width: unset;
  margin: 0 5px;
}
#header #header-wrapper .header-top .language {
  display: none;
}
#header #header-wrapper .header-top #nav li a{
  border-radius: 8px;
}
#header #header-wrapper .header-top #nav li a{
      border-bottom: transparent solid 1px;
}
#header #header-wrapper .header-top #nav li  a:hover {
  background-color: #fff;
  color: #000;
}
#header #header-wrapper .header-top #nav li  a:hover a {
  color: currentColor;
}
#header #header-wrapper .header-top #nav li  a:hover a{
  border-width: 0;
  background-color: transparent;
}
#header #header-wrapper #subheader {
  position: unset;
  display: none;
}
#header #header-wrapper #subheader .date-clock {
  margin-top: 0;
  padding-top: 40px;
}
.logout{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 20px;
}
.logout svg{
  width: 35px;
}
.logout:hover{
  transform: translate(-10px, -50%) scale(1.1);
  transition: all 0.3s;
}
</style>`;
  body.insertAdjacentHTML("beforebegin", styles);
})();
