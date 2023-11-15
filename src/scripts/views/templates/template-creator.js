import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (data) => `
<h2 class='restaurant__title'>${data.restaurant.name}</h2>
<img class='restaurant__poster' src='${CONFIG.BASE_IMAGE_URL + data.restaurant.pictureId}' alt='${data.restaurant.name}' />
<div class='restaurant__info'>
    <h3>Information</h3>
    <h4>Rating>
    <p>${data.restaurant.rating}</p>
    <h4>City</h4>
    <p>${data.restaurant.city}</p>
    <h4>Description</h4>
    <p>${data.restaurant.description}</p>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
        <div class="restaurantContainer" id="restaurantContainer" tabindex="0">
            <div class="card" id="card">
                <div id="(${restaurant.id})" class="card-body" >
                <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
                <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
                <p>${restaurant.description}</p>
                </div>
            </div>
        </div>
        `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
};