using Microsoft.EntityFrameworkCore;
using WebAPI2.Interfaces;
using WebAPI2.Models;

namespace WebAPI2.Data.Repo
{
    public class PropertyTypeRepository : IPropertyTypeRepository
    {
        private readonly DataContext dc;

        public PropertyTypeRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public async Task<IEnumerable<PropertyType>> GetPropertyTypesAsync()
        {
            return await dc.PropertyTypes.ToListAsync();
        }
    }
}