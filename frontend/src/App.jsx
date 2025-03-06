import React, { useState } from 'react';
import RestaurantMap from './components/RestaurantMap';
import RestaurantDetails from './components/RestaurantDetails';
import './App.css';

// Données de test pour les restaurants
const mockRestaurants = [
    {
        id: 1,
        name: "Le Petit Bistrot",
        address: "123 rue de la Paix, Paris",
        latitude: 48.8566,
        longitude: 2.3522,
        phone: "01 23 45 67 89",
        openingHours: "Lundi - Samedi: 11h00 - 23h00",
        menu: {
            categories: [
                {
                    id: 1,
                    name: "Entrées",
                    items: [
                        {
                            id: 1,
                            name: "Soupe à l'Oignon",
                            description: "Soupe traditionnelle gratinée",
                            price: 12
                        },
                        {
                            id: 2,
                            name: "Salade Niçoise",
                            description: "Thon, olives, tomates, anchois",
                            price: 14
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Plats",
                    items: [
                        {
                            id: 3,
                            name: "Steak-Frites",
                            description: "Entrecôte grillée, frites maison",
                            price: 24
                        },
                        {
                            id: 4,
                            name: "Coq au Vin",
                            description: "Mijoté de poulet au vin rouge",
                            price: 22
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 2,
        name: "La Trattoria",
        address: "456 avenue des Champs-Élysées, Paris",
        latitude: 48.8738,
        longitude: 2.2950,
        phone: "01 98 76 54 32",
        openingHours: "Tous les jours: 12h00 - 00h00",
        menu: {
            categories: [
                {
                    id: 1,
                    name: "Pâtes",
                    items: [
                        {
                            id: 1,
                            name: "Spaghetti Carbonara",
                            description: "Pâtes, œufs, pecorino, guanciale",
                            price: 16
                        },
                        {
                            id: 2,
                            name: "Penne Arrabbiata",
                            description: "Pâtes, sauce tomate épicée",
                            price: 14
                        }
                    ]
                }
            ]
        }
    }
];

function App() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleRestaurantSelect = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setShowDetails(true);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Restaurants à Paris</h1>
            </header>
            <main className="app-main">
                <RestaurantMap 
                    restaurants={mockRestaurants}
                    onRestaurantSelect={handleRestaurantSelect}
                />
                <RestaurantDetails
                    restaurant={selectedRestaurant}
                    show={showDetails}
                    onHide={() => setShowDetails(false)}
                />
            </main>
        </div>
    );
}

export default App;
