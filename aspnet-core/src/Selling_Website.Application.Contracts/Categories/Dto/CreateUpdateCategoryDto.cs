using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace Selling_Website.Categories.Dto
{
    public class CreateUpdateCategoryDto: EntityDto<Guid?>
    {
        public string CateName { get; set; }
        public string Note { get; set; }
    }
}
