using Selling_Website.Entities;
using Selling_Website.Orders.Dto;
using System;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.Orders
{
    public class OrderAppService : BaseAppService<
        Order, Guid, CreateUpdateOrderDto, GetOrderDto, GetOrderForEditDto, GetOrderForInputDto>
    {
        public OrderAppService(IRepository<Order, Guid> repository) : base(repository)
        {
        }
    }
}
