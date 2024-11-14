import { BodyType, createInstance } from "./api-instance";
import {
    SignInBodyDto,
    SignUpBodyDto,
    ResetPasswordBodyDto,
    GetSessionDto,
    UserUpdateDataDto,
    BrandDto,
    BrandListDto,
    CategoryListDto,
    CategoryDto,
    UserListDto,
    ProductsList,
    CarouselListDto,
    AddRemoveFromToCarousel,
    removeProductDto
} from "./types";

type SecondParameter<T extends (...args: any) => any> = T extends (
    config: any,
    args: infer P,
) => any
    ? P
    : never;

export const authSignUp = (
    signUpBodyDto: BodyType<SignUpBodyDto>,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        {
            url: `/auth/sign-up`,
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: signUpBodyDto,
        },
        options,
    );
};

export const authResetPassword = (
    resetPasswordBodyDto: BodyType<ResetPasswordBodyDto>,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        {
            url: `/auth/reset-password`,
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: resetPasswordBodyDto,
        },
        options,
    );
};

export const authSignIn = (
    signInBodyDto: BodyType<SignInBodyDto>,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        {
            url: `/auth/sign-in`,
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: signInBodyDto,
        },
        options,
    );
};

export const productsAddProduct = (
    formData: FormData,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        {
            url: `/products/add`,
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
            data: formData,
        },
        options,
    );
};

export const categoriesAddBrand = (
    categoriesBrandDto: BodyType<BrandDto>,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        {
            url: `/categories/add_brand`,
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: categoriesBrandDto,
        },
        options,
    );
};

export const categoriesAddCategory = (
    categoriesCategoryDto: BodyType<CategoryDto>,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        {
            url: `/categories/add_category`,
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: categoriesCategoryDto,
        },
        options,
    );
};

export const authSignOut = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        { url: `/auth/sign-out`, method: "post" },
        options,
    );
};

export const authGetSessionInfo = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<GetSessionDto>(
        { url: `/auth/session`, method: "get" },
        options,
    );
};

export const getAllUsers = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<UserListDto>(
        {
            url: `/user/all`,
            method: "get",
        },
        options,
    );
};

export const getProducts = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<ProductsList>(
        {
            url: `/products/all`,
            method: "get",
        },
        options,
    );
};
export const categoriesGetBrands = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<BrandListDto>(
        { url: `/categories/get_brands`, method: "get" },
        options,
    );
};

export const categoriesGetCategories = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<CategoryListDto>(
        { url: `/categories/get_categories`, method: "get" },
        options,
    );
};

export const categoriesGetCarousel = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<CarouselListDto>(
        { url: `/categories/get_carousel`, method: "get" },
        options,
    );
};

export const userUpdateData = (
    userUpdateDataDto: BodyType<UserUpdateDataDto>,
    options?: SecondParameter<typeof createInstance>,
) => {
    const { id, ...data } = userUpdateDataDto;
    return createInstance<void>(
        {
            url: `/user/update/${id}`,
            method: "patch",
            headers: { "Content-Type": "application/json" },
            data,
        },
        options,
    );
};

export const categoriesAddToCarousel = (
    categoriesAddToCarouselDto: BodyType<AddRemoveFromToCarousel>,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        {
            url: `/categories/add_to_carousel`,
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: categoriesAddToCarouselDto,
        },
        options,
    );
};

export const categoriesDeleteFromCarousel = (
    categoriesDeleteFromCarouselDto: BodyType<AddRemoveFromToCarousel>,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        {
            url: `/categories/delete_from_carousel`,
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: categoriesDeleteFromCarouselDto,
        },
        options,
    );
};


export const productsRemoveProduct = (id: string) => {
    return createInstance<removeProductDto>({
      url: `/products/delete/${id}`,
      method: "delete",
    });
  };

export type AuthSignUpResult = NonNullable<
    Awaited<ReturnType<typeof authSignUp>>
>;
export type AuthSignInResult = NonNullable<
    Awaited<ReturnType<typeof authSignIn>>
>;
export type AuthSignOutResult = NonNullable<
    Awaited<ReturnType<typeof authSignOut>>
>;
export type AuthGetSessionInfoResult = NonNullable<
    Awaited<ReturnType<typeof authGetSessionInfo>>
>;
export type userUpdateDataResult = NonNullable<
    Awaited<ReturnType<typeof userUpdateData>>
>;
export type GetAllUsersResult = NonNullable<
    Awaited<ReturnType<typeof getAllUsers>>
>;
export type GetProductsResult = NonNullable<
    Awaited<ReturnType<typeof getProducts>>
>;
export type productsAddProduct = NonNullable<
    Awaited<ReturnType<typeof productsAddProduct>>
>;
export type categoriesGetBrands = NonNullable<
    Awaited<ReturnType<typeof categoriesGetBrands>>
>;
export type categoriesAddBrand = NonNullable<
    Awaited<ReturnType<typeof categoriesAddBrand>>
>;
export type categoriesGetCategories = NonNullable<
    Awaited<ReturnType<typeof categoriesGetCategories>>
>;

export type categoriesAddCategory = NonNullable<
    Awaited<ReturnType<typeof categoriesAddCategory>>
>;
export type categoriesGetCarousel = NonNullable<
    Awaited<ReturnType<typeof categoriesGetCarousel>>
>;
export type categoriesAddToCarousel = NonNullable<
    Awaited<ReturnType<typeof categoriesAddToCarousel>>
>;
export type categoriesDeleteFromCarousel = NonNullable<
    Awaited<ReturnType<typeof categoriesDeleteFromCarousel>>
>;
export type productsRemoveProduct = NonNullable<
    Awaited<ReturnType<typeof productsRemoveProduct>>
>;
