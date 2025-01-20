import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const categories = [{
  "id": "1",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "2",
  "title": "Rings",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
      "wedding",
      "women",
      "men",
      "engagement"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/038/000/334/non_2x/ai-generated-beautiful-gold-ring-with-a-diamond-in-the-shape-of-a-heart-photo.jpg"
},
{
  "id": "3",
  "title": "Rings",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men",
    "engagement"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/038/000/334/non_2x/ai-generated-beautiful-gold-ring-with-a-diamond-in-the-shape-of-a-heart-photo.jpg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
},
{
  "id": "4",
  "title": "Chain",
  "description": "Chain is worn by both women and men. Achieve Authentic fashion at your doorstep.",
  "category": "beauty",
  "tags": [
    "wedding",
    "women",
    "men"
  ],
  "thumbnail": "https://static.vecteezy.com/system/resources/previews/034/781/723/non_2x/ai-generated-beautiful-and-elegant-woman-gold-jewellery-necklace-photo.jpeg"
}
];

export default function Category() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="font-serif text-2xl font-extrabold text-[#4e3629] py-5">All Categories - </h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <Link to={`/category-detail/${category.id}`} key={category.id} className = 'group'>
            <div>
              <img
                alt={category.title}
                src={category.thumbnail}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                />
            </div>
              <h3 className="font-sans mt-2 text-[#555555] text-center text-sm">{category.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
