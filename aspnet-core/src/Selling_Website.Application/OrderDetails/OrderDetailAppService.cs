using Selling_Website.Entities;
using Selling_Website.OrderDetails.Dto;
using System;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.OrderDetailDetails
{
    public class OrderDetailAppService : BaseAppService<
        OrderDetail, Guid, CreateUpdateOrderDetailDto, GetOrderDetailDto, GetOrderDetailForEditDto, GetOrderDetailForInputDto>
    {
        public OrderDetailAppService(IRepository<OrderDetail, Guid> repository) : base(repository)
        {
        }
    }
}
