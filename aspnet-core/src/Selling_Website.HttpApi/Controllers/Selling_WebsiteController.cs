using Selling_Website.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Selling_Website.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class Selling_WebsiteController : AbpController
    {
        protected Selling_WebsiteController()
        {
            LocalizationResource = typeof(Selling_WebsiteResource);
        }
    }
}