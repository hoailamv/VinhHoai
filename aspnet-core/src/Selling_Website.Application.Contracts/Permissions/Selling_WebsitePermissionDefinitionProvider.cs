using Selling_Website.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Selling_Website.Permissions
{
    public class Selling_WebsitePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(Selling_WebsitePermissions.GroupName, L("Permission::Selling_Website"));

            var customer = myGroup.AddPermission(Selling_WebsitePermissions.Customer.Default, L("Permission::Customer"));
            customer.AddChild(Selling_WebsitePermissions.Customer.Create, L("Permission::Create"));
            customer.AddChild(Selling_WebsitePermissions.Customer.Update, L("Permission::Update"));
            customer.AddChild(Selling_WebsitePermissions.Customer.Delete, L("Permission::Delete"));

            var category = myGroup.AddPermission(Selling_WebsitePermissions.Customer.Default, L("Permission::Category"));
            customer.AddChild(Selling_WebsitePermissions.Category.Create, L("Permission::Create"));
            customer.AddChild(Selling_WebsitePermissions.Category.Update, L("Permission::Update"));
            customer.AddChild(Selling_WebsitePermissions.Category.Delete, L("Permission::Delete"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<Selling_WebsiteResource>(name);
        }
    }
}
