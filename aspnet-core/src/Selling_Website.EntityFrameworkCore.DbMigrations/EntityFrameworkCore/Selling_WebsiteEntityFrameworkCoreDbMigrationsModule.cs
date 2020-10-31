using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace Selling_Website.EntityFrameworkCore
{
    [DependsOn(
        typeof(Selling_WebsiteEntityFrameworkCoreModule)
        )]
    public class Selling_WebsiteEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<Selling_WebsiteMigrationsDbContext>();
        }
    }
}
