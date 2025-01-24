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
        <h1 className="font-serif text-3xl font-extrabold text-[#4e3629]">Pick Your Fashion - </h1>
        <div className=" mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <Link to={`/category-detail/${category.id}`} key={category.id} className = 'group'>
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h3 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.title}</h3>
                <p className="text-center font-normal text-gray-700 dark:text-gray-400">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
