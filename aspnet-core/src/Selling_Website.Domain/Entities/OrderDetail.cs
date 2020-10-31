using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Selling_Website.Entities
{
    public class OrderDetail : FullAuditedAggregateRoot<Guid>
    {
        [ForeignKey("Products")]
        public Guid? ProductID { get; set; }
        public Product Product { get; set; }
        [ForeignKey("Order")]
        public Guid? OrderID { get; set; }
        public Order Order { get; set; }
        public int? Price { get; set; }
        public string Quantity { get; set; }
    }
}
