using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace Selling_Website.Entities
{
    public class Category : FullAuditedAggregateRoot<Guid>
    {
        public string CateName { get; set; }
        public string Note { get; set; }
        public IList<Product> Products { get; set; }
    }
}
