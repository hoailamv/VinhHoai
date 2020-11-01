using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Orders.Dto
{
    public class OrderDto : FullAuditedEntityDto<Guid>
    {
        public DateTime? OrderDate { get; set; }

    }
}
