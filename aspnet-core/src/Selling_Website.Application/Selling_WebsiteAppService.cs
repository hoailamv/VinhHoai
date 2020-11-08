using Selling_Website.Localization;
using Volo.Abp.Application.Services;

namespace Selling_Website
{
    /* Inherit your application services from this class.
     */
    public abstract class Selling_WebsiteAppService : ApplicationService
    {
        protected Selling_WebsiteAppService()
        {
            LocalizationResource = typeof(Selling_WebsiteResource);
        }
    }
}
