using Selling_Website.Orders.Dto;
using System;

namespace Selling_Website.Orders
{
    public interface IOrderAppService : IBaseAppService
        <Guid, CreateUpdateOrderDto, GetOrderDto, GetOrderForEditDto, GetOrderForInputDto>
    {
    }
}
