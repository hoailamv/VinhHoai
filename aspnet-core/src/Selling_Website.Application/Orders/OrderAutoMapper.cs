using AutoMapper;
using Selling_Website.Entities;
using Selling_Website.Orders.Dto;

namespace Selling_Website.Orders
{
    public class OrderAutoMapper : Profile
    {
        public OrderAutoMapper()
        {
            CreateMap<Order, OrderDto>(MemberList.None);
            CreateMap<OrderDto, Order>(MemberList.None);
            CreateMap<Order, GetOrderDto>(MemberList.None);
            CreateMap<Order, GetOrderForEditDto>(MemberList.None);
            CreateMap<CreateUpdateOrderDto, Order>(MemberList.None);
            CreateMap<GetOrderForEditDto, Order>(MemberList.None);
        }


    }
}
