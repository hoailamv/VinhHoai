using Microsoft.EntityFrameworkCore.Migrations;

namespace Selling_Website.Migrations
{
    public partial class addint2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Imagesource",
                table: "OrderDetail",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Imagesource",
                table: "OrderDetail");
        }
    }
}
