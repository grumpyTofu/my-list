import { Controller, Get } from 'src/utils/api.decorator';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  private readonly todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  @Get({ name: 'getTodos', responseType: [Todo] })
  getTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
}
