import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import Loader from './components/Loader'

Loader.attachTo('div.dimmer');
AddTodoForm.attachTo('form');
TodoList.attachTo('main');