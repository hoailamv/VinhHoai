using Selling_Website.Categories.Dto;
using Selling_Website.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.Categories
{
    public class CategoryAppService : BaseAppService<
        Category, Guid, CreateUpdateCategoryDto, GetCategoryDto, GetCategoryForEditDto, GetCategoryForInputDto>
    {
        public CategoryAppService(IRepository<Category, Guid> repository) : base(repository)
        {
        }
    }
}
