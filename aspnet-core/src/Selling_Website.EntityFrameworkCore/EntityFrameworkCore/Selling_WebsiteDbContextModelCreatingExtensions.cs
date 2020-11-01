using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace Selling_Website.EntityFrameworkCore
{
    public static class Selling_WebsiteDbContextModelCreatingExtensions
    {
        public static void ConfigureSelling_Website(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(Selling_WebsiteConsts.DbTablePrefix + "YourEntities", Selling_WebsiteConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}