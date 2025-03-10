export interface IRestaurantMenuItems {
  id: number,
  title: string,
  href: string,
  subMenuItems :
   {
    id: number,
    title: string,
    href: string,
   }[]
}
