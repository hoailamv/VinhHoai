using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Customers.Dto
{
    public class GetCustomerForInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
