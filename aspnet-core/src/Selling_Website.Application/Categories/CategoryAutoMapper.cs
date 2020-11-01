using AutoMapper;
using Selling_Website.Categories.Dto;
using Selling_Website.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Selling_Website.Categories
{
    public class CategoryAutoMapper : Profile
    {
        public CategoryAutoMapper()
        {
            CreateMap<Category, CategoryDto>(MemberList.None);
            CreateMap<CategoryDto, Category>(MemberList.None);
            CreateMap<Category, GetCategoryDto>(MemberList.None);
            CreateMap<Category, GetCategoryForEditDto>(MemberList.None);
            CreateMap<CreateUpdateCategoryDto, Category>(MemberList.None);
            CreateMap<GetCategoryForEditDto, Category>(MemberList.None);
        }


    }
}
