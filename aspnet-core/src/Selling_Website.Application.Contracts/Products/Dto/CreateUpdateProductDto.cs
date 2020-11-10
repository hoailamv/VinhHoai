using System;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Products.Dto
{
    public class CreateUpdateProductDto : EntityDto<Guid?>
    {
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public Guid? CategoryId { get; set; }
        public int? Price { get; set; }
        public int? Quantity { get; set; }
        public string ImgSource { get; set; }
    }
}
