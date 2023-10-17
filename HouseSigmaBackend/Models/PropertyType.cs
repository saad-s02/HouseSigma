using System.ComponentModel.DataAnnotations;

namespace WebAPI2.Models
{
    public class PropertyType : BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}