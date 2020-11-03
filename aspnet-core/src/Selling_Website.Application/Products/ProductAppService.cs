using Selling_Website.Entities;
using Selling_Website.Products.Dto;
using System;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.Products
{
    public class ProductAppService : BaseAppService<
        Product, Guid, CreateUpdateProductDto, GetProductDto, GetProductForEditDto, GetProductForInputDto>
    {
        public ProductAppService(IRepository<Product, Guid> repository) : base(repository)
        {
        }
    }
}
