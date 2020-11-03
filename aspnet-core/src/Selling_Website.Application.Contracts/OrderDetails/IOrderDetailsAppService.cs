using Selling_Website.OrderDetails.Dto;
using System;

namespace Selling_Website.OrderDetailDetails
{
    public interface IOrderDetailDetailsAppService : IBaseAppService
        <Guid, CreateUpdateOrderDetailDto, GetOrderDetailDto, GetOrderDetailForEditDto, GetOrderDetailForInputDto>
    {
    }
}
