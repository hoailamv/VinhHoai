using Volo.Abp.Reflection;

namespace Selling_Website.Permissions
{
    public static class Selling_WebsitePermissions
    {
        public const string GroupName = "Selling_Website";

        //Add your own permission names. Example:
        //public const string MyPermission1 = GroupName + ".MyPermission1";
        public static string[] GetAll() {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(Selling_WebsitePermissions));
        }

        public class Customer
        {
            public const string Default = GroupName + ".Customer";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        public class Category
        {
            public const string Default = GroupName + ".Category";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
    }
}