using Volo.Abp.Settings;

namespace Selling_Website.Settings
{
    public class Selling_WebsiteSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(Selling_WebsiteSettings.MySetting1));
        }
    }
}
