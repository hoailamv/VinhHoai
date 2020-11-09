using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Selling_Website.Entities
{
    public class Product : FullAuditedAggregateRoot<Guid>
    {
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public Guid? CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
        public int? Price { get; set; }
        public int? Quantity { get; set; }
        public string ImgSource { get; set; }
    }
}
