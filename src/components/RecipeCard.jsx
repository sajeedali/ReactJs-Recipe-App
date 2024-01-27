import React from "react";
import CustomImage from "./Customimage";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} alt="" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          magnam sunt vel officiis asperiores voluptatem dolore, omnis culpa rem
          dolor nulla odit voluptas commodi reprehenderit magni minima illum
          quaerat eos.
        </p>
        <a href="#!" className="view-btn">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
