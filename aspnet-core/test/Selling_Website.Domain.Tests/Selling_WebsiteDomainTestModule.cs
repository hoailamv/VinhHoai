using Selling_Website.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Selling_Website
{
    [DependsOn(
        typeof(Selling_WebsiteEntityFrameworkCoreTestModule)
        )]
    public class Selling_WebsiteDomainTestModule : AbpModule
    {

    }
}