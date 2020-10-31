using System.Threading.Tasks;

namespace Selling_Website.Data
{
    public interface ISelling_WebsiteDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
