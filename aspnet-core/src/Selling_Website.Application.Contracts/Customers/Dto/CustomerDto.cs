using System;
using Volo.Abp.Application.Dtos;

namespace Selling_Website.Customers.Dto
{
    public class CustomerDto : FullAuditedEntityDto<Guid>
    {
        public string Name { get; set; }
        public DateTime? DOB { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Size { get; set; }
        public string Message { get; set; }
        public string Subject { get; set; }
    }
}
