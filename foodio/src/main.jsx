import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Componenets/Header'
import RestaurentCard from './Componenets/RestaurentCard'
import './index.css'






const resObj= {
  "id": "193570",
  "name": "Homely",
  "cloudinaryImageId": "oliaoekhhbzvwzovv3rg",
  "locality": "Mahatee Niketan Apartments",
  "areaName": "Himayath Nagar",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Home Food",
  "North Indian",
  "South Indian",
  "Beverages",
  "Desserts",
  "Thalis"
  ],
  "avgRating": 4.3,
  "parentId": "4043",
  "avgRatingString": "4.3",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 0.2,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "0.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-02-27 16:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
  "description": "OnlyOnSwiggy"
  }
  ],
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "C",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "OnlyOnSwiggy",
  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹110"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  }



const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
     
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
