using AutoMapper;
using Selling_Website.Customers.Dto;
using Selling_Website.Entities;

namespace Selling_Website.Customers
{
    public class CustomerAutoMapper : Profile
    {
        public CustomerAutoMapper()
        {
            CreateMap<Customer, CustomerDto>(MemberList.None);
            CreateMap<CustomerDto, Customer>(MemberList.None);
            CreateMap<Customer, GetCustomerDto>(MemberList.None);
            CreateMap<Customer, GetCustomerForEditDto>(MemberList.None);
            CreateMap<CreateUpdateCustomerDto, Customer>(MemberList.None);
            CreateMap<GetCustomerForEditDto, Customer>(MemberList.None);
        }


    }
}
