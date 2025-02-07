type DiscountProducts = "Laptop" | "Smartphone";

type ProductPrice<T> = T extends DiscountProducts
  ? "DiscountedPrice"
  : "RegularPrice";

// let's check the price type below:
type LaptopPrice = ProductPrice<"Laptop">; // "DiscountedPrice"
type BookPrice = ProductPrice<"Book">; // "RegularPrice"

// another example
// extractiong a type from the Promise

type AwaitedPrimise<T> = T extends Promise<infer U> ? U : T;

type FetchUser = Promise<{ id: number; name: string }>;

type User = AwaitedPrimise<FetchUser>; // { id: number; name: string; }
type NumberType = AwaitedPrimise<number> // number