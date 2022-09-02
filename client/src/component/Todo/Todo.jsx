import Wrapper from './wrapper';
import {TodoList} from './Todolist';
import AddNew from './addnew';
import ResetAll from './ResetAll';

function Todo() {
  return (
    
      <>
        <meta
          name='description'
          content='Minimal To-do List application for you to manage your tasks.'
        />
        <title>Tudu - Minimal To-do List</title>
      
      
      <Wrapper className=''>
        <div className=''>
           <AddNew /> 
          <TodoList />
          <ResetAll />
        </div>
      </Wrapper>
    </>
  );
}

export default Todo;