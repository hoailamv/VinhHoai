using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Selling_Website.Entities
{
    public class OrderDetail : FullAuditedAggregateRoot<Guid>
    {
        public Guid? OrderId { get; set; }
        [ForeignKey("OrderId")]
        public Order Order { get; set; }
        public int? Price { get; set; }
        public string Quantity { get; set; }
        public string OrderName { get; set; }
        public Guid? CustomerId { get; set; }
        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }
        public string Imagesource { get; set; }
        public string Size { get; set; }
    }
}
