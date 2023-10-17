using System.ComponentModel.DataAnnotations;

namespace WebAPI2.Models
{
    public class FurnishingType : BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}