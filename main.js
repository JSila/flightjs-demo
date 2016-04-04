import { AddTodoForm, TodoList, Loader, InfoMessage } from './components';

Loader.attachTo('div.dimmer');
InfoMessage.attachTo('.message');
AddTodoForm.attachTo('form');
TodoList.attachTo('#todos');