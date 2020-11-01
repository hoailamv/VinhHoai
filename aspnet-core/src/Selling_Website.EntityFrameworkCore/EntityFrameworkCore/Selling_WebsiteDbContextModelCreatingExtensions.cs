using Microsoft.EntityFrameworkCore;
using Selling_Website.Entities;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

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

            builder.Entity<Customer>(b =>
            {
                b.ToTable("Customer");
                b.ConfigureByConvention();
            });
            builder.Entity<Product>(b =>
            {
                b.ToTable("Product");
                b.ConfigureByConvention();
            }); 
            builder.Entity<Order>(b =>
            {
                b.ToTable("Order");
                b.ConfigureByConvention();
            }); 
            builder.Entity<OrderDetail>(b =>
            {
                b.ToTable("OrderDetail");
                b.ConfigureByConvention();
            });
            builder.Entity<Category>(b =>
            {
                b.ToTable("Category");
                b.ConfigureByConvention();
            });
        }
    }
}