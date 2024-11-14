export interface Product {
	product_id: string;
	name: string;
	price: string;
	size: string;
	color: string;
	image: string;
	brand: Brand;
	categories: Category[];
  }
  
  export interface Category {
	parent: categoryParent;
	name: string;
  }
  
  export interface categoryParent {
	name: string;
  }
  
  export interface Brand {
	brand_name: string;
  }
  
  export type ProductsList = Product[];
  
  export interface ProductResponseDto {
	  product_id: string;
	  name: string;
	  price: string;
	  categories: Category[];
	  brand: {
		  brand_name: string;
	  };
	  size: string;
	  color: string;
	  image: string;
  }
  
  export type AddRemoveFromToCarousel = {
	  product_id: string;
  };
  
  export type ProductListResponseDto = ProductResponseDto[];
  
  export interface UserDto {
	  id: string;
	  login: string;
	  email: string;
	  role: string;
  }

  export type removeProductDto = {
	  product_id: string;
  }
  
  export type UserListDto = UserDto[];
  
  export interface GetSessionDto {
	  id: number;
	  email: string;
	  login: string;
	  iat: number;
	  exp: number;
  }
  
  export interface BrandDto {
	  brand_id?: number;
	  brand_name: string;
  }
  
  export type BrandListDto = BrandDto[];
  
  export interface CategoryDto {
	  name: string;
  }
  
  export type CategoryListDto = CategoryDto[];
  
  export interface SignInBodyDto {
	  email: string;
	  password: string;
  }
  
  export interface CarouselDto {
	  id: string;
	  rating: number;
	  product: ProductResponseDto[];
  }
  
  export type CarouselListDto = CarouselDto[];
  
  export interface UserUpdateDataDto {
	  id: number;
	  email?: string;
	  login?: string;
  }
  
  export interface SignUpBodyDto {
	  email: string;
	  login: string;
	  password: string;
  }
  
  export interface ResetPasswordBodyDto {
	  email: string;
  }
  