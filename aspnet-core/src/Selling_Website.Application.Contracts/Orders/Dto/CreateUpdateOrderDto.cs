using System;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Orders.Dto
{
    public class CreateUpdateOrderDto : EntityDto<Guid?>
    {
        public DateTime? OrderDate { get; set; }
    }
}
