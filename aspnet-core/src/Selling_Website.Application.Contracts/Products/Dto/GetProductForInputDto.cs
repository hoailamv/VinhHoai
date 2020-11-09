using System;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Products.Dto
{
    public class GetProductForInputDto : PagedAndSortedResultRequestDto
    {
        public Guid? id { get; set; }
    }
}
