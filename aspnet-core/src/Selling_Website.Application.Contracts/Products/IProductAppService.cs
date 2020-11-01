using Selling_Website.Products.Dto;
using System;

namespace Selling_Website.Products
{
    public interface IProductAppService : IBaseAppService
        <Guid, CreateUpdateProductDto, GetProductDto, GetProductForEditDto, GetProductForInputDto>
    {
    }
}
