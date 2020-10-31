using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Selling_Website.Entities
{
    public class Order : FullAuditedAggregateRoot<Guid>
    {
        public DateTime? OrderDate { get; set; }
        [ForeignKey("Customer")]
        public Guid? CustomerID { get; set; }
        public Customer Customer { get; set; }
        public IList<OrderDetail> OrderDetails { get; set; }
    }
}
