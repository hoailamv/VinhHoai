using Selling_Website.Customers.Dto;
using Selling_Website.Entities;
using System;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.Customers
{
    public class CustomerAppService : BaseAppService<
        Customer, Guid, CreateUpdateCustomerDto, GetCustomerDto, GetCustomerForEditDto, GetCustomerForInputDto>
    {
        public CustomerAppService(IRepository<Customer, Guid> repository) : base(repository)
        {
        }
    }
}
