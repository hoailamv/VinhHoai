using System;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Customers.Dto
{
    public class CreateUpdateCustomerDto : EntityDto<Guid?>
    {
        public string Name { get; set; }
        public DateTime? DOB { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
