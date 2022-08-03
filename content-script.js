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
  position: relative;
  z-index: 2;
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
    transition: all 0.3s;
}
.logout svg{
  width: 35px;
}

.logout:hover{
  transform: translate(-10px, -50%) scale(1.1);
  
}
.box-logout{
  display:none;
}
#content .welcome .man,#content .welcome .woman{
      position: absolute;
    top: 10px;
    left: 0;
    text-align: center;
  background: linear-gradient(to right, #ff0000 20%, #fdfdfd 40%, #f00 60%, #ffffff 80%);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 2s linear infinite;
          animation: shine 2s linear infinite;
          z-index: 3;
}
@-webkit-keyframes shine {
  to {
    background-position: 200% center;
  }
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
#content #content_left .accordion2 .item{
      background: #312f2f;
      color: #e7dede;
       transition: all 0.3s;
}
#content #content_left .accordion2 ul li{
      background: #a08585;
      color: #1b1515;
       transition: all 0.3s;
}
#content #content_left .accordion2 ul li a{
  background: transparent;
}
#content #content_left .accordion2 .item:hover{
  background: #e7dede;
  color: #312f2f;
}
#content #content_left .accordion2 ul li a:hover{
  color: #240b0b;
}
#content .welcome .sitemap{
  position: relative;
  float: none;
}
#content .welcome .sitemap span{
   background: transparent;
}
#content .welcome .sitemap > span:nth-child(2){
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  float: none;
}
#content .welcome .sitemap > span:nth-child(2) > img{
  display: none;
}
#content .welcome .sitemap > span:nth-child(2) > span{
      font-size: 24px;
    font-weight: 600;
    color: #000;
    letter-spacing: 0.05rem;
}
#area-sitemap > span:nth-child(1) > span > a,#content .welcome .sitemap span .title{
  color:#fff;
}
#area-sitemap > span:nth-child(1) > span > a:hover{
  color: #c0c0c0;
}
</style>`;
  body.insertAdjacentHTML("beforebegin", styles);
  const styleAfter = `<style>
  #left_zone{
      position: fixed;
    left: 0;
  top: 0;
  background: #312f2f;
  min-height: 100vh;
  transition: all 0.4s ease-in-out;
  padding-top: 77px;
  z-index: 1;
}
</style>`;
  body.insertAdjacentHTML("afterend", styleAfter);
})();
const leftZone = document.querySelector("#left_zone");
// if window scroll down than #header set top = 0
window.onscroll = function () {
  if (window.pageYOffset > 77) {
    leftZone.style.paddingTop = "0";
  } else {
    leftZone.style.paddingTop = "77px";
  }
};
