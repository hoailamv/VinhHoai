using Selling_Website.Categories.Dto;
using Selling_Website.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.Categories
{
    public class CategoryAppService : BaseAppService<
        Category, Guid, CreateUpdateCategoryDto, GetCategoryDto, GetCategoryForEditDto, GetCategoryForInputDto>,
        ICategoryAppService
    {
        public CategoryAppService(IRepository<Category, Guid> repository) : base(repository)
        {
        }

        public async Task<List<GetCategoryDto>> Filter(string input, int paging, int pageMax = 12)
        {
            var query = Repository.WhereIf(!string.IsNullOrWhiteSpace(input),
                x => x.CateName.Contains(input));
            var listOfCategory = query.Skip(paging * pageMax).Take(pageMax).ToList();
            return ObjectMapper.Map<List<Category>, List<GetCategoryDto>>(listOfCategory);
        }

        public async Task<int> GetNumberOfCatergory(string input)
        {
            return Repository
                .WhereIf(!string.IsNullOrWhiteSpace(input), x => x.CateName.Contains(input))
                .Count();
        }
    }
}
