using Volo.Abp.Modularity;

namespace Selling_Website
{
    [DependsOn(
        typeof(Selling_WebsiteApplicationModule),
        typeof(Selling_WebsiteDomainTestModule)
        )]
    public class Selling_WebsiteApplicationTestModule : AbpModule
    {

    }
}