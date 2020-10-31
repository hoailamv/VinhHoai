using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Selling_Website.Data
{
    /* This is used if database provider does't define
     * ISelling_WebsiteDbSchemaMigrator implementation.
     */
    public class NullSelling_WebsiteDbSchemaMigrator : ISelling_WebsiteDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}