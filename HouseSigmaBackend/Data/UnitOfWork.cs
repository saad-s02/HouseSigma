﻿using WebAPI2.Data.Repo;
using WebAPI2.Data;
using WebAPI2.Interfaces;
using WebAPI.Data.Repo;

namespace WebAPI.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;

        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
        }
        public ICityRepository CityRepository =>
            new CityRepository(dc);

        public IUserRepository UserRepository =>
            new UserRepository(dc);

        public IFurnishingTypeRepository FurnishingTypeRepository =>
            new FurnishingTypeRepository(dc);

        public IPropertyTypeRepository PropertyTypeRepository =>
            new PropertyTypeRepository(dc);

        public IPropertyRepository PropertyRepository =>
            new PropertyRepository(dc);

        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}