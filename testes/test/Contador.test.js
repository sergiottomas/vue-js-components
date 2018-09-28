import test from 'ava';
import Contador from './../src/Contador.vue'
import { mount } from 'avoriaz'

test('Analisar se contador está em 0', t => {
  t.is(Contador.default.data().total, 0);
});

test('subtraindo um número do total', t => {
  Contador.default.methods.subtrair();
  t.is(Contador.default.data().total, -1);
});
