import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Article } from './article.entity';
import { ArticleService } from './article.service';

@Crud({
  model: {
    type: Article,
  },
})
@Controller('article')
export class ArticleController
  implements CrudController<Article>
{
  constructor(public service: ArticleService) {}
}
