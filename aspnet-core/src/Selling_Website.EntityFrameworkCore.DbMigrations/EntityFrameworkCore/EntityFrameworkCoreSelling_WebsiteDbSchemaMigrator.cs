using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Selling_Website.Data;
using Volo.Abp.DependencyInjection;

namespace Selling_Website.EntityFrameworkCore
{
    public class EntityFrameworkCoreSelling_WebsiteDbSchemaMigrator
        : ISelling_WebsiteDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreSelling_WebsiteDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the Selling_WebsiteMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<Selling_WebsiteMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}