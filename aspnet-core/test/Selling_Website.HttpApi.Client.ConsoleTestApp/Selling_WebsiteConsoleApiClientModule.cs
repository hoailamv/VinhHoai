using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace Selling_Website.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(Selling_WebsiteHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class Selling_WebsiteConsoleApiClientModule : AbpModule
    {
        
    }
}
