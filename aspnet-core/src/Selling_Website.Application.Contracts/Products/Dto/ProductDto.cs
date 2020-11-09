using System;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Products.Dto
{
    public class ProductDto : FullAuditedEntityDto<Guid>
    {
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public Guid? CategoryId { get; set; }
        public int? Price { get; set; }
        public string Quantity { get; set; }
        public string ImgSource { get; set; }
}
}
