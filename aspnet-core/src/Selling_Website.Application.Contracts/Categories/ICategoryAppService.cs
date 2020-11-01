using Selling_Website.Categories.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Selling_Website.Categories
{
    public interface ICategoryAppServiceICategoryAppService : IBaseAppService
        <Guid, CreateUpdateCategoryDto, GetCategoryDto, GetCategoryForEditDto, GetCategoryForInputDto>
    {
    }
}
