using AutoMapper;
using Selling_Website.Customers.Dto;
using Selling_Website.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Selling_Website.Customers
{
    public class CustomerAutoMapperProfile : Profile
    {
        public CustomerAutoMapperProfile()
        {
            CreateMap<Customer, CustomerDto>(MemberList.None);
            CreateMap<CustomerDto, Customer>(MemberList.None);
            CreateMap<Customer, GetCustomerDto>(MemberList.None);
            CreateMap<Customer, GetCutomerForEditDto>(MemberList.None);
            CreateMap<CreateUpdateCustomerDto, Customer>(MemberList.None);
        }
    }
}
