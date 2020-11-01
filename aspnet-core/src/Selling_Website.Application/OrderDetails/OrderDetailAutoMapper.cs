using AutoMapper;
using Selling_Website.Entities;
using Selling_Website.OrderDetails.Dto;

namespace Selling_Website.OrderDetailDetails
{
    public class OrderDetailAutoMapper : Profile
    {
        public OrderDetailAutoMapper()
        {
            CreateMap<OrderDetail, OrderDetailDto>(MemberList.None);
            CreateMap<OrderDetailDto, OrderDetail>(MemberList.None);
            CreateMap<OrderDetail, GetOrderDetailDto>(MemberList.None);
            CreateMap<OrderDetail, GetOrderDetailForEditDto>(MemberList.None);
            CreateMap<CreateUpdateOrderDetailDto, OrderDetail>(MemberList.None);
            CreateMap<GetOrderDetailForEditDto, OrderDetail>(MemberList.None);
        }


    }
}
