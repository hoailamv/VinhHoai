using Selling_Website.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Selling_Website.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(Selling_WebsiteEntityFrameworkCoreDbMigrationsModule),
        typeof(Selling_WebsiteApplicationContractsModule)
        )]
    public class Selling_WebsiteDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
