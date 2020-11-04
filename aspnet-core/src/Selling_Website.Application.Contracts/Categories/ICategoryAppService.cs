using Selling_Website.Categories.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Selling_Website.Categories
{
    public interface ICategoryAppService : IBaseAppService
        <Guid, CreateUpdateCategoryDto, GetCategoryDto, GetCategoryForEditDto, GetCategoryForInputDto>
    {
        Task<List<GetCategoryDto>> Filter(string input, int paging, int pageMax = 12);
        Task<int> GetNumberOfCatergory(string input);
    }
}
