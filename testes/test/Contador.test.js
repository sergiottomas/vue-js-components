import test from 'ava';
import Contador from './../src/Contador.vue'
import { mount } from 'avoriaz'

var component = mount(Contador);

test('Analisar se contador está em 0', t => {
  t.is(component.data().total, 0);
});

test('subtraindo um número do total', t => {
  let button = component.find("button")[0];
  button.trigger('click');

  t.is(component.data().total, -1);
});

test('somando um número do total', t => {
  let button = component.find("button")[1];
  button.trigger('click');

  t.is(component.data().total, 0);
});
