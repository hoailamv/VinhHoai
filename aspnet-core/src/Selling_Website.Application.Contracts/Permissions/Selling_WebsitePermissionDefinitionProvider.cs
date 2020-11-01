using Selling_Website.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Selling_Website.Permissions
{
    public class Selling_WebsitePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(Selling_WebsitePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(Selling_WebsitePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<Selling_WebsiteResource>(name);
        }
    }
}
