export interface WishlistAddResponse {
  message: string;
  data: {
    id: number;
    customer: { id: number };
    item: { id: number };
  } | null;
}
