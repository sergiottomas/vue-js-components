export default {
  bind: function (el, infos, vnode) {
    switch (Object.keys(infos.modifiers)[0]) {
      case "maiusculo":
        el.innerHTML = el.innerHTML.toUpperCase();
        break
      case "minusculo":
        el.innerHTML = el.innerHTML.toLowerCase();
        break
      case "capitalizado":
        let txt = el.innerHTML.split(' ')
        el.innerHTML = ''
        for (var i = 0; i < txt.length; i++) {
          el.innerHTML += txt[i].substring(0, 1).toUpperCase() + txt[i].substring(1) + ' '
        }
        break
    }
  }
}
