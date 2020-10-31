using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Selling_Website.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class Selling_WebsiteMigrationsDbContextFactory : IDesignTimeDbContextFactory<Selling_WebsiteMigrationsDbContext>
    {
        public Selling_WebsiteMigrationsDbContext CreateDbContext(string[] args)
        {
            Selling_WebsiteEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<Selling_WebsiteMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new Selling_WebsiteMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../Selling_Website.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
