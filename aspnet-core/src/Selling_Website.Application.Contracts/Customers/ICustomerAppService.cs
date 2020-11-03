using Selling_Website.Customers.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Selling_Website.Customers
{
    public interface ICustomerAppService : IBaseAppService
        <Guid, CreateUpdateCustomerDto, GetCustomerDto, GetCustomerForEditDto, GetCustomerForInputDto>
    {
    }
}
