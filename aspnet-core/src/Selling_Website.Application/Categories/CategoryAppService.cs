using Selling_Website.Categories.Dto;
using Selling_Website.Entities;
using Selling_Website.Permissions;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.Categories
{
    public class CategoryAppService : BaseAppService<Category, Guid, CreateUpdateCategoryDto, GetCategoryDto,
        GetCategoryForEditDto, GetCategoryForInputDto>, ICategoryAppService
    {
        public CategoryAppService(IRepository<Category, Guid> repository) : base(repository)
        {
        }
        protected override string CreatePolicyName { get; set; } = Selling_WebsitePermissions.Category.Create;
        protected override string DeletePolicyName { get; set; } = Selling_WebsitePermissions.Category.Delete;
        protected override string GetListPolicyName { get; set; } = Selling_WebsitePermissions.Category.Default;
        protected override string GetPolicyName { get; set; } = Selling_WebsitePermissions.Category.Default;
        protected override string UpdatePolicyName { get; set; } = Selling_WebsitePermissions.Category.Update;
    }
}
