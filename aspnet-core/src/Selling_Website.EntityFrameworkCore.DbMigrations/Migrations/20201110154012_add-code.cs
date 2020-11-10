using Microsoft.EntityFrameworkCore.Migrations;

namespace Selling_Website.Migrations
{
    public partial class addcode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Message",
                table: "Customer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Subject",
                table: "Customer",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Message",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "Subject",
                table: "Customer");
        }
    }
}
