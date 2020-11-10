using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace Selling_Website.Entities
{
    public class Customer : FullAuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }
        public DateTime? DOB { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Message { get; set; }
        public string Subject { get; set; }
        public IList<OrderDetail> orderDetails { get; set; }
    }
}
