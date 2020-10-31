using Selling_Website.Customers.Dto;
using Selling_Website.Entities;
using Selling_Website.Permissions;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.Customers
{
    public class CustomerAppService : BaseAppService<Customer, Guid, CreateUpdateCustomerDto, GetCustomerDto,
        GetCutomerForEditDto, GetCustomerForInputDto>, ICustomerAppService
    {
        public CustomerAppService(IRepository<Customer, Guid> repository) : base(repository)
        {
        }
        protected override string CreatePolicyName { get; set; } = Selling_WebsitePermissions.Customer.Create;
        protected override string DeletePolicyName { get; set; } = Selling_WebsitePermissions.Customer.Delete;
        protected override string GetListPolicyName { get; set; } = Selling_WebsitePermissions.Customer.Default;
        protected override string GetPolicyName { get; set; } = Selling_WebsitePermissions.Customer.Default;
        protected override string UpdatePolicyName { get; set; } = Selling_WebsitePermissions.Customer.Update;
    }
}
