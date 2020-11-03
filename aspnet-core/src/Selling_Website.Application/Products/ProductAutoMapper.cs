using AutoMapper;
using Selling_Website.Entities;
using Selling_Website.Products.Dto;

namespace Selling_Website.Products
{
        public class ProductAutoMapper : Profile
        {
            public ProductAutoMapper()
            {
                CreateMap<Product, ProductDto>(MemberList.None);
                CreateMap<ProductDto, Product>(MemberList.None);
                CreateMap<Product, GetProductDto>(MemberList.None);
                CreateMap<Product, GetProductForEditDto>(MemberList.None);
                CreateMap<CreateUpdateProductDto, Product>(MemberList.None);
                CreateMap<GetProductForEditDto, Product>(MemberList.None);
            }
        }
}
