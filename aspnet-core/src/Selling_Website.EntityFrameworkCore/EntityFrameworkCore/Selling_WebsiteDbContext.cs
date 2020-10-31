using Microsoft.EntityFrameworkCore;
using Selling_Website.Entities;
using Selling_Website.Users;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;
using Volo.Abp.Users.EntityFrameworkCore;

namespace Selling_Website.EntityFrameworkCore
{
    /* This is your actual DbContext used on runtime.
     * It includes only your entities.
     * It does not include entities of the used modules, because each module has already
     * its own DbContext class. If you want to share some database tables with the used modules,
     * just create a structure like done for AppUser.
     *
     * Don't use this DbContext for database migrations since it does not contain tables of the
     * used modules (as explained above). See Selling_WebsiteMigrationsDbContext for migrations.
     */
    [ConnectionStringName("Default")]
    public class Selling_WebsiteDbContext : AbpDbContext<Selling_WebsiteDbContext>
    {
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<OrderDetail> OrderDetails  { get; set; }
        public DbSet<Category> Categories { get; set; }


        /* Add DbSet properties for your Aggregate Roots / Entities here.
         * Also map them inside Selling_WebsiteDbContextModelCreatingExtensions.ConfigureSelling_Website
         */

        public Selling_WebsiteDbContext(DbContextOptions<Selling_WebsiteDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            /* Configure the shared tables (with included modules) here */

            builder.Entity<AppUser>(b =>
            {
                b.ToTable(AbpIdentityDbProperties.DbTablePrefix + "Users"); //Sharing the same table "AbpUsers" with the IdentityUser
                
                b.ConfigureByConvention();
                b.ConfigureAbpUser();

                /* Configure mappings for your additional properties
                 * Also see the Selling_WebsiteEfCoreEntityExtensionMappings class
                 */
            });

            /* Configure your own tables/entities inside the ConfigureSelling_Website method */

            builder.ConfigureSelling_Website();
        }
    }
}
