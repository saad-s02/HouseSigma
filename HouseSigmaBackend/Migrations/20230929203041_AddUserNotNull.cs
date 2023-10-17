using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAPI2.Migrations
{
    /// <inheritdoc />
    public partial class AddUserNotNull : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"UPDATE [dbo].[Cities] SET [Country]='Canada' WHERE [Country] IS NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
