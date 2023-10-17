import { Ipropertybase } from './ipropertybase';

export class Property implements Ipropertybase {
  id?: number;
  sellRent?: number;
  name?: string;
  propertyTypeId?: number;
  propertyType?: string;
  bhk?: number;
  furnishingType?: string;
  furnishingTypeId?: number;
  price?: number;
  builtArea?: number;
  carpetArea?: number;
  address?: string;
  address2?: string;
  CityId?: number;
  city?: string;
  floorNo?: string;
  totalFloors?: string;
  readyToMove?: boolean;
  age?: string;
  mainEntrance?: string;
  security?: number;
  gated?: boolean;
  maintenance?: number;
  estPossessionOn?: string;
  imgae?: string;
  description?: string;

}