import Vue from 'vue'
import Myrouter from 'vue-router'

Vue.use(Myrouter)

const home = () =>
  import("../views/home")
const fenlei = () =>
  import("../views/fenlei")
const huiyuan = () =>
  import("../views/huiyuan")
const gouwuche = () =>
  import("../views/gouwuche")
const my = () =>
  import("../views/my")
const duodian = () =>
  import("../views/child/duodian")
const quanqiu = () =>
  import("../views/child/quanqiu")
const area = () =>
  import("../views/area")
const dizhi = () =>
  import("../views/dizhi")
export default new Myrouter({
  routes: [{
    path: "/",
    redirect: "/home",
    meta: {
      flag: true
    }
  }, {
    path: "/home",
    component: home,
    redirect: "/home/duodian",
    meta: {
      flag: true
    },
    children: [{
      path: "duodian",
      component: duodian,
      meta: {
        flag: true
      }
    }, {
      path: "quanqiu",
      component: quanqiu,
      meta: {
        flag: true
      }
    }]
  }, {
    path: "/fenlei",
    component: fenlei
  }, {
    path: "/huiyuan",
    component: huiyuan
  }, {
    path: "/gouwuche",
    component: gouwuche
  }, {
    path: "/my",
    component: my
  }, {
    path: "/area",
    component: area
  }, {
    path: "/dizhi",
    component: dizhi
  }]
})
