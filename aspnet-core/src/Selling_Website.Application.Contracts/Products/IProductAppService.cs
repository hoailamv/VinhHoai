using Selling_Website.Products.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Selling_Website.Products
{
    public interface IProductAppService : IBaseAppService
        <Guid, CreateUpdateProductDto, GetProductDto, GetProductForEditDto, GetProductForInputDto>
    {
    }
}
