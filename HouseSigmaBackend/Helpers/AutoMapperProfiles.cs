﻿using AutoMapper;
using WebAPI2.Dtos;
using WebAPI2.Models;

namespace WebAPI2.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City, CityDto>().ReverseMap();

            CreateMap<City, CityUpdateDto>().ReverseMap();

            CreateMap<Property, PropertyDto>().ReverseMap();

            CreateMap<Property, PropertyListDto>()
                .ForMember(d => d.City, opt => opt.MapFrom(src => src.City.Name))
                .ForMember(d => d.Country, opt => opt.MapFrom(src => src.City.Country))
                .ForMember(d => d.PropertyType, opt => opt.MapFrom(src => src.PropertyType.Name))
                .ForMember(d => d.FurnishingType, opt => opt.MapFrom(src => src.FurnishingType.Name));

            CreateMap<Property, PropertyDetailDto>()
               .ForMember(d => d.City, opt => opt.MapFrom(src => src.City.Name))
               .ForMember(d => d.Country, opt => opt.MapFrom(src => src.City.Country))
               .ForMember(d => d.PropertyType, opt => opt.MapFrom(src => src.PropertyType.Name))
               .ForMember(d => d.FurnishingType, opt => opt.MapFrom(src => src.FurnishingType.Name));


            CreateMap<FurnishingType, KeyValuePairDto>();

            CreateMap<PropertyType, KeyValuePairDto>();
        }

    }
}