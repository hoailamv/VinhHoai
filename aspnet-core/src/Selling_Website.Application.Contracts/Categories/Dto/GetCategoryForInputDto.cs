using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Categories.Dto
{
    public class GetCategoryForInputDto: PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
