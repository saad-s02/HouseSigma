using WebAPI2.Models;

namespace WebAPI2.Interfaces
{
        public interface IPropertyTypeRepository
        {
            Task<IEnumerable<PropertyType>> GetPropertyTypesAsync();
        }
}
