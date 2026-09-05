import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Product{id:string;name:string;description:string;price:number;imageUrl:string;inStock:boolean;category:string;}
@Component({selector:'app-root',standalone:true,imports:[CommonModule,FormsModule],templateUrl:'./app.component.html',styleUrl:'./app.component.css'})
export class AppComponent{
 storeName='Selsela Suboori Store'; searchTerm=''; selectedCategory='All'; cartCount=0;
 products:Product[]=[
    {id:'P001',name:'Rose Quartz Face Roller',description:'Cooling facial roller for a calm skincare routine.',price:24.5,imageUrl:'https://picsum.photos/seed/P001/700/500',inStock:true,category:'Beauty'},
    {id:'P002',name:'Velvet Lip Tint',description:'Soft everyday lip tint with a lightweight finish.',price:18,imageUrl:'https://picsum.photos/seed/P002/700/500',inStock:true,category:'Beauty'},
    {id:'P003',name:'Botanical Hand Cream',description:'Rich hand cream for a simple daily self-care routine.',price:16.75,imageUrl:'https://picsum.photos/seed/P003/700/500',inStock:false,category:'Beauty'},
    {id:'P004',name:'Pearl Mini Handbag',description:'Compact statement handbag for dinners and special occasions.',price:54.99,imageUrl:'https://picsum.photos/seed/P004/700/500',inStock:true,category:'Fashion'},
    {id:'P005',name:'Satin Everyday Scarf',description:'Lightweight satin scarf with an elegant drape.',price:28.5,imageUrl:'https://picsum.photos/seed/P005/700/500',inStock:true,category:'Fashion'},
    {id:'P006',name:'Classic Neutral Tote',description:'Roomy tote for notebooks and everyday essentials.',price:42,imageUrl:'https://picsum.photos/seed/P006/700/500',inStock:true,category:'Accessories'},
    {id:'P007',name:'Golden Hoop Earrings',description:'Minimal hoop earrings for an understated look.',price:21.99,imageUrl:'https://picsum.photos/seed/P007/700/500',inStock:false,category:'Accessories'},
    {id:'P008',name:'Blush Ceramic Vase',description:'Sculptural ceramic vase for a soft room accent.',price:36,imageUrl:'https://picsum.photos/seed/P008/700/500',inStock:true,category:'Home Decor'},
    {id:'P009',name:'Vanilla Soy Candle',description:'Warm scented candle for quiet and cozy evenings.',price:19.5,imageUrl:'https://picsum.photos/seed/P009/700/500',inStock:true,category:'Home Decor'},
    {id:'P010',name:'Linen Cushion Cover',description:'Textured neutral cushion cover for a comfortable interior.',price:22.25,imageUrl:'https://picsum.photos/seed/P010/700/500',inStock:true,category:'Home Decor'},
    {id:'P011',name:'Daily Reflection Journal',description:'Hardcover journal for notes, plans and reflections.',price:15.99,imageUrl:'https://picsum.photos/seed/P011/700/500',inStock:true,category:'Stationery'},
    {id:'P012',name:'Pastel Highlighter Set',description:'Soft-color highlighters for study notes and planning.',price:11.5,imageUrl:'https://picsum.photos/seed/P012/700/500',inStock:true,category:'Stationery'},
    {id:'P013',name:'Lavender Eye Pillow',description:'Soft relaxation pillow designed for quiet moments.',price:20,imageUrl:'https://picsum.photos/seed/P013/700/500',inStock:true,category:'Wellness'},
    {id:'P014',name:'Glass Water Bottle',description:'Reusable glass bottle for everyday hydration.',price:17.95,imageUrl:'https://picsum.photos/seed/P014/700/500',inStock:false,category:'Wellness'}
 ];
 get categories():string[]{return ['All',...Array.from(new Set(this.products.map(p=>p.category)))];}
 get filteredProducts():Product[]{const t=this.searchTerm.trim().toLowerCase();return this.products.filter(p=>(this.selectedCategory==='All'||p.category===this.selectedCategory)&&(!t||(`${p.name} ${p.description} ${p.category}`).toLowerCase().includes(t))));}
 chooseCategory(c:string):void{this.selectedCategory=c;}
 addToCart(p:Product):void{if(p.inStock)this.cartCount++;}
}
