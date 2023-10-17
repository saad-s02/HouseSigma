using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI2.Models
{
    public class BaseEntity
    {
        [Column(Order = 0)]
        public int Id { get; set; }
        public DateTime LastUpdatedOn { get; set; } = DateTime.Now;
        public int LastUpdatedBy { get; set; }

    }
}