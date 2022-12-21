
import { LatLng } from "leaflet";
import { CartItem } from "./cartsitem";

export class Order{
  id!:number;
  items!: CartItem[];
  totalPrice!:number;
  name!: string;
  address!: string;
  addressLating?:LatLng;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
