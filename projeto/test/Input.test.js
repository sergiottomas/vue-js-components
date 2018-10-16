import test from "ava";
import { mount } from "avoriaz";

import Input from "./../src/components/LvInput.vue"

let component = mount(Input, {
  propsData: {
    titulo: "Nome"
  }
});

test("componente sendo inicializado com o titulo Nome", t => {
  const titulo = component.find("legend")[0];
  t.is(titulo.text(), "Nome");
});
