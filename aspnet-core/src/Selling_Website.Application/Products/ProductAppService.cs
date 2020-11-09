using Selling_Website.Entities;
using Selling_Website.Products.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.Products
{
    public class ProductAppService : BaseAppService<
        Product, Guid, CreateUpdateProductDto, GetProductDto, GetProductForEditDto, GetProductForInputDto>,
        IProductAppService
    {
        public ProductAppService(IRepository<Product, Guid> repository) : base(repository)
        {
        }

        public async Task<List<GetProductDto>> GetListByPage()
        {
            var list = Repository.ToList();
            return ObjectMapper.Map<List<Product>, List<GetProductDto>>(list);
        }

        protected override IQueryable<Product> CreateFilteredQuery(GetProductForInputDto input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.id.ToString()), x=> x.CategoryId == input.id);
        }
    }
}
